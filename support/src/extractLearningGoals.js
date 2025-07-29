import { readFile, writeFile, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(__dirname, 'programmeStructure.json');
const outputLines = [];

function extractLearningGoals(content) {
  const sectionRegex = /#+\s*Learning goals\s*\n([\s\S]*?)(?=\n#+\s|$)/i;
  const match = content.match(sectionRegex);

  if (!match) return { found: false, goals: [] };

  const section = match[1];
  const bullets = section.match(/^\s*[-*+]\s+.+/gm);
  return {
      found: true,
      goals: bullets ? bullets.map(b => b.replace(/^\s*/, match => match)) : []
  };
}
  

async function processCourses() {
  const data = JSON.parse(await readFile(jsonPath, 'utf-8'));
  const courses = data.courses;

  outputLines.push("# Programme Overview");

  for (const course of courses) {
    outputLines.push(`## ${course.name}`);

    for (const module of course.modules) {
      outputLines.push(`### ${module.name}`);

      const modulePath = join(__dirname, "../../", module.location);
      const readmePath = join(modulePath, 'README.md');

      // Check if module directory exists
      try {
        const moduleStats = await stat(modulePath);
        if (!moduleStats.isDirectory()) {
          outputLines.push(`> ❌ Module path is not a directory: \`${module.location}\``);
          continue;
        }
      } catch {
        outputLines.push(`> ❌ Module directory not found at \`${module.location}\``);
        continue;
      }

      // Try reading README
      let content;
      try {
        content = await readFile(readmePath, 'utf-8');
      } catch {
        outputLines.push(`> ❌ Missing README.md in module directory \`${module.location}\``);
        continue;
      }

      const { found, goals } = extractLearningGoals(content);
      if (!found) {
        outputLines.push(`> ❌ "Learning goals" section not found in \`${module.location}\``);
      } else if (goals.length === 0) {
        outputLines.push(`> ⚠️ "Learning goals" section is empty in \`${module.location}\``);
      } else {
        goals.forEach(goal => outputLines.push(`${goal}`));
      }

      outputLines.push('');
    }

    outputLines.push('');
  }

  const outputPath = join(__dirname, 'programme-overview.md');
  await writeFile(outputPath, outputLines.join('\n'), 'utf-8');
  console.log(`✅ Summary written to ${outputPath}`);
}

processCourses();
