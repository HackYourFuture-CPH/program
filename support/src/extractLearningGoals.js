import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(__dirname, 'programmeStructure.json');
const outputLines = [];

function extractLearningGoals(content) {
  const sectionRegex = /#+\s*Learning goals\s*\n([\s\S]*?)(\n#+\s|\n{2,}|\r?\n\r?\n|$)/i;
  const match = content.match(sectionRegex);

  if (!match) return { found: false, goals: [] };

  const section = match[1];
  const bullets = section.match(/^\s*[-*+]\s+.+/gm);
  return { found: true, goals: bullets ? bullets.map(b => b.trim()) : [] };
}

async function processCourses() {
  const data = JSON.parse(await readFile(jsonPath, 'utf-8'));
  const courses = data.courses;

  outputLines.push("# Programme Learning Goals Summary");

  for (const course of courses) {
    outputLines.push(`## ${course.name}`);

    for (const module of course.modules) {
      outputLines.push(`### ${module.name}`);

      const readmePath = join(__dirname, "../../", module.location, 'README.md');
      let content;

      try {
        content = await readFile(readmePath, 'utf-8');
      } catch {
        outputLines.push(`> ❌ Missing README.md at \`${module.location}\`\n`);
        continue;
      }

      const { found, goals } = extractLearningGoals(content);
      if (!found) {
        outputLines.push(`> ❌ "Learning goals" section not found in \`${module.location}\`\n`);
      } else if (goals.length === 0) {
        outputLines.push(`> ⚠️ "Learning goals" section is empty in \`${module.location}\`\n`);
      } else {
        goals.forEach(goal => outputLines.push(`${goal}`));
      }

      outputLines.push('');
    }

    outputLines.push('');
  }

  const outputPath = join(__dirname, 'learning_goals_summary.md');
  await writeFile(outputPath, outputLines.join('\n'), 'utf-8');
  console.log(`✅ Summary written to ${outputPath}`);
}

processCourses();
