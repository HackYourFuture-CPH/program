# Session Plan

## **Part 1: Foundations of Generative AI (45 min)**

- Icebreaker: “Where have you already seen AI being used?”
- **Mini-lecture + short video**: What is Generative AI? (LLMs, what they can/can’t do)
- Activity: Students sketch a quick analogy (“LLM is like…”) to explain AI simply.
- Discussion: Benefits vs. limitations in workplace and learning.

## **Part 2: AI Literacy in Practice (45 min)**

- Risks & Ethics: Bias, misinformation, copyright, hallucinations, privacy.
- Case study: Short scenarios where AI could be helpful or harmful.
- Group activity: Sort examples into *appropriate- vs.*inappropriate- uses.
- Reflection: “How might AI change the skills needed in your future jobs?”

## **Break – 10 minutes**

## **Part 3: Learning with AI (60 min)**

### Questions to ask yourself
Every time you use AI to support your learning or completing tasks, ask yourself these questions:
1. Do I understand everything it has written? If not, ask it to explain!
2. Does the answer really fit my use case? If not, edit the output yourself or try again!
3. Am I sure the answer is correct? If not, compare it with other sources!

Let's practice using these questions while completing this next task together.

### The task
Let's look at using AI to help us create a simple HTML page with some content. Here's what we want to build:
- A HTML page with a heading, a paragraph, and a list of 3 items.
- The heading should be centered, the paragraph text color should be blue, and the list items bold.
- When the page loads, an alert should pop up and say "Welcome".

### 1. Getting started
You have all created HTML pages before, but maybe it isn't easy to remember everything you need to include in a new HTML page.

```
I'm creating a new HTML page. Remind me what a basic html page should look like. I need a very simple starting point.
```

Go through the questions, and make follow up prompts or changes to your code before moving on.

1. Do I understand everything it has written? No!
```
Expain what "<meta charset="utf-8" />" means in simple terms.
```

2. Does the answer fit my use case? Mostly, but it added some extra things that aren't needed right now (that could be some text, extra elements, or external stylesheets). Remove these manually.

3. Am I sure the answer is correct? Yes! We've seen similar HTML many times before, so we are confident.

#### Exercise
The trainees should now follow similar steps to create their own html file. They should go through each question themselves, and write down and share three learnings from the first question.

### 2. Adding the content
You can remember how to add a header, paragraph and a list, so write this code manually together. You don't know how to center a header off the top of your head, so get some help:

```
What options do I have for centering a header? Explain the pros and cons to each.
```

Go through each of the options, and discuss with the trainees what the right solution might be. Make the change in the code.

Quickly review the questions:
1. Do I understand the solution? If there is something trainees don't understand, make a follow up prompt together.
2. Does it fit my use case? Yes, it appears to be correct based on the pros and cons.
3. Am I sure the answer is correct? Yes, the header becomes centered and nothing else breaks.

#### Exercise
The trainees should make these changes in their code as well, along with the two other styling changes (blue text, bold list items). Similar to the centering prompt, trainees should ask AI to help with at least one of these requirements. Get some trainees to share with the team what options they learned about and what they chose and why. Discuss any differences.

### 3. New functionality
Now we need to add an alert when the page loads. We need to learn something new here.

```
How can I add the functionality so when the page loads an alert pops up and says "welcome"?
```

1. Do I understand everything it has written? No, this is all new to use! Let's pretend we haven't used JavaScript before.

```
Can you explain the script tag solution line by line?
```

2. Does the solution fit my use case? Yes, it appears to do what I need in a simple way.

3. Am I sure the answer is correct? It's new to me, so we're not 100% sure.

#### Exercise
Brainstorm together other ways to validate the answers. These could include:
1. Asking a mentor/more experienced colleague
2. Googling for other perspectives
3. Official documentation
4. and more

Ask the trainees to find some official documentation to validate the solution we are going with. Share with the group. (If they don't manage, guide them towards MDN, W3School etc. for ["alert"](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) and ["DOMContentLoaded" event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event), and read through it together).

### 4. The Comparison
So we have a html page working as we expected, and we learned lots along the way. Do a quick run through of all the things we've learned. Literally count them by going through the prompt history, and asking trainees. Write the number down.

AI can also produce all of this code upfront, with one prompt (or so). It's very impressive! Let's look at in action.

```
Create a web page with the following requirements:
- A HTML page with a heading, a paragraph, and a list of 3 items.
- The heading should be centered, the paragraph text color should be blue, and the list items bold.
- When the page loads, an alert should pop up and say "Welcome".
```

Compare the solutions. Discuss any differences. Maybe AI "made up" some things like choosing a font. Or maybe it overcomplicated the CSS compared to ours. 

Highlight this key point: If we did this at the start of the task, we wouldn't have learned much along the way. The first approach, we learned X things, and this was just one exercise. Simple maths for impact: You learned X things just today, and over the 36 weeks of HYF, that means Y things. Don't miss out by skipping this learning process!

## **Part 4: Prompting Techniques & Critical Evaluation (50 min)**

- Intro to prompting basics (clear instructions, examples, constraints).
- Hands-on: Students craft prompts for Copilot to solve a small task (e.g., responsive nav bar).
- Peer review: Swap prompts & outputs—critique accuracy, style, and efficiency.
- Mini-discussion: “When should you trust Copilot, and when should you double-check?”

Prompt:

- Create a responsive navigation bar with HTML, CSS, and JavaScript. The nav bar should collapse into a hamburger menu on small screens.

## **Part 5: Reflection & Wrap-Up (30 min)**

- Group sharing: What worked well with Copilot? What was frustrating?
- Reflective writing: “How will I use AI responsibly to support my learning?”
- Quick Q\&A: Connect AI literacy to long-term skill growth.
- Recap of key takeaways + prep for next session.

## Other notes
Some working notes from previous conversations, that could be used as inspiration/included somehow in this module:

- [Our current proposal for hyf AI usage expectations (in pr form)](https://github.com/HackYourFuture-CPH/programme/pull/118/files)
- [Suggestions from @te-online](https://github.com/HackYourFuture-CPH/programme/pull/118#issuecomment-3070705560)
- [Github has a whole bunch of public training content for copilot, which we could heavily base ours on](https://skills.github.com/#take-flight-with-github-copilot)
