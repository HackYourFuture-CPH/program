# Session Plan

## Part 0: Review AI HYF AI Guidelines (5 mins)

- Quickly run through the [HYF AI Guideline](https://github.com/HackYourFuture-CPH/programme/blob/main/guidelines/ai-usage.md) and see if anyone has any questions to clarify.

<!-- TODO add notice to mentors regarding importance of ai alignment -->

## Part 1: Foundations of Generative AI (45 mins)

- Icebreaker: "Where have you already seen AI being used?"
- **Mini-lecture + short video**: What is Generative AI? (LLMs, what they can/can’t do)
- Activity: Students sketch a quick analogy (“LLM is like…”) to explain AI simply.
- Discussion: Benefits vs. limitations in workplace and learning.

## Part 2: AI Literacy in Practice (45 mins)

- Risks & Ethics: Bias, misinformation, copyright, hallucinations, privacy.
  - Bias: AI may reproduce or amplify unfair stereotypes present in its training data.
    - An AI CV screener favors male applicants over female ones because it was trained on biased hiring data.
    - An image generator depicts “CEO” as only men and “nurse” as only women.
    - A chatbot gives more positive descriptions for English text than for the same text written in another language.
  - Misinformation: AI can generate content that looks convincing but is factually incorrect.
    - A language model says the capital of Australia is Sydney (when it’s actually Canberra).
    - An AI health assistant suggests drinking soda as a cure for illness.
    - A generative AI summarizes a news event but mixes up key details, like dates or people involved.
  - Copyright: AI outputs may unintentionally reuse or mimic protected material without permission.
    - An AI tool generates code that is almost identical to proprietary code from GitHub repos.
    - A generative art model produces an image nearly identical to a famous cartoon character.
    - An AI text generator reproduces long paragraphs from a copyrighted book word-for-word.
  - Hallucinations: AI sometimes invents details or answers that sound plausible but are not true.
    - An AI chatbot “cites” fake academic papers that don’t exist.
    - A travel assistant AI invents a train schedule for a route that isn’t actually running.
    - A programming assistant suggests using a non-existent JavaScript function.
  - Privacy: Using AI tools can risk exposing personal or sensitive information if not handled carefully.
    - A student pastes their friend’s phone number into ChatGPT to “test” a feature, unknowingly sharing private data.
    - An employee uploads confidential customer records to an AI assistant to generate a report.
    - A medical chatbot stores patients’ health details without their consent.
- Case study: Short scenarios where AI could be helpful or harmful.
- Group activity: Sort examples into *appropriate- vs.*inappropriate- uses.
- Reflection: “How might AI change the skills needed in your future jobs?”

## Break (10 mins)

## Part 3: Learning with AI (60 mins)

Demonstrate using Copilot to support learning through an example task. It is important to set a good example inline with the AI Usage guidelines, since this is the first time we are introducing AI to the trainees.

### The AI questions framework

Every time a trainee uses AI to support their learning or completing tasks, they should ask themseleves these questions:

1. Do I understand everything it has written? If not, ask it to explain or choose a different solution!
2. Does the answer really fit my use case? If not, edit the code yourself or try again!
3. Am I sure the answer is correct? If not, validate it with other sources!

Run through the task below and use this framework at each step. There are examples below, but feel free to freestyle.

### The task

Let's look at using AI to help us create a simple HTML page with some content. Here's what we want to build:

- A HTML page with a heading, a paragraph, and a list of 3 items.
- The heading should be centered, the paragraph text color should be blue, and the list items bold.
- When the page loads, an alert should pop up and say "Welcome".

### 1. Getting started

"You have all created HTML pages before, but maybe it isn't easy to remember everything you need to include in a new HTML page."

Prompt:

```
I'm creating a new HTML page. Remind me what a basic html page should look like. I need a very simple starting point.
```

Go through the AI questions, and make follow up prompts or changes to the code before moving on.

1. Do I understand everything it has written? **No!**

Prompt:

```
Expain what "<meta charset="utf-8" />" means in simple terms.
```

2. Does the answer fit my use case? **Mostly, but it added some extra things that aren't needed right now (that could be some text, extra elements, or external stylesheets). Remove these manually.**

3. Am I sure the answer is correct? **Yes! We've seen similar HTML many times before, so we are feeling confident.**

#### Exercise 1

The trainees should now follow similar steps on their own:

1. Create their own basic HTML page
1. Go through each AI question
1. Write down and share three learnings from the first question

Discuss some of the learnings together in the team.

### 2. Adding the content

"For the sake of this task, let's assume we can remember how to add a header, paragraph and a list, so we will write this code manually together. You're not sure know how to center a header though, so get some help from AI:"

Prompt:

```
What options do I have for centering a header? Explain the pros and cons to each.
```

Talk through each of the options, and discuss with the trainees what the right solution might be. Make the change in the code.

Review the AI questions:

1. Do I understand the solution? **If there is something trainees don't understand, make a follow up prompt together.**
2. Does it fit my use case? **Yes, it appears to be correct based on the pros and cons.**
3. Am I sure the answer is correct? **Yes, the header becomes centered and nothing else breaks.**

#### Exercise 2

The trainees should make these changes in their code as well, along with the two other styling changes (blue text and bold list items).

Similar to the centering prompt, trainees should ask AI to help with at least one of these other requirements.

Get some trainees to share with the team what options they learned about, what they chose and why. Discuss any differences.

### 3. New functionality

"Now we need to add an alert when the page loads. We need to learn something new here."

Prompt:

```
How can I add the functionality so when the page loads an alert pops up and says "Welcome"?
```

1. Do I understand everything it has written? **No, this is all new to use! Let's pretend we haven't used JavaScript before.**

Prompt:

```
Can you explain the script tag solution line by line?
```

2. Does the solution fit my use case? **Yes, it appears to do what I need in a simple way.**

3. Am I sure the answer is correct? **It's new to me, so we're not 100% confident. Let's research it some more...**

#### Exercise 3

Brainstorm together other ways to validate the solution(s) suggested by AI. These could include:

- Asking a mentor/more experienced colleague
- Googling for other perspectives
- Official documentation
- and more

Ask the trainees to find some official documentation to validate the solution we are thinking to use. They should share their findings with the group.

(If they need more direction, guide them towards MDN, W3School etc. for ["alert"](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) and ["DOMContentLoaded" event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event), and read through it together).

### 4. The Comparison

So now have a html page built in line with the requriements. Do a quick run through of all the things the team has learned along the way (from AI). Literally count them by going through the prompt history, and asking trainees. Write the number down - it's just a rough estimate, but we need it later!

"AI can also produce all of this code upfront, with one prompt (or so). It's very impressive! Let's look at in action."

Prompt:

```
Create a web page with the following requirements:
- A HTML page with a heading, a paragraph, and a list of 3 items.
- The heading should be centered, the paragraph text color should be blue, and the list items bold.
- When the page loads, an alert should pop up and say "Welcome".
```

Compare the AI generated code with the one you built as a team. Discuss any differences. Looks for things like:

- Parts that AI "made up" like choosing a font, text, styles, layouts that we didn't ask it to do
- Overcomplicated parts like additional CSS classes or styling that is unecessary in our task

#### The conclusion

If we used this prompt at the start of the task, we wouldn't have learned all we did along the way. This is bad, since we're here at HYF to learn as much as we possibly can.

In the first approach, we learned X things (quote the number from before), and this was all from just this one exercise!

Simple maths for impact: You learned X new things just today. Over the 36 weeks of HYF, that that could easily mean Y new learnings if you follow our guidelines for using AI. Don't miss out on these learnings by using AI the wrong way!

## Part 4: Prompting Techniques & Critical Evaluation (50 mins)

- Intro to prompting basics (clear instructions, examples, constraints). [Official Guide](https://code.visualstudio.com/docs/copilot/chat/prompt-crafting?originUrl=%2Fdocs%2Fcopilot%2Fsetup)
- Hands-on: Students craft prompts for Copilot to solve a small task (e.g., responsive nav bar).
- Peer review: Swap prompts & outputs—critique accuracy, style, and efficiency.
- Mini-discussion: “When should you trust Copilot, and when should you double-check?”

### Prompt

- Create a responsive navigation bar with HTML, CSS, and JavaScript. The nav bar should collapse into a hamburger menu on small screens.

## Part 5: Reflection & Wrap-Up (30 mins)

- Group sharing: What worked well with Copilot? What was frustrating?
- Reflective writing: “How will I use AI responsibly to support my learning?”
- Quick Q\&A: Connect AI literacy to long-term skill growth.
- Recap of key takeaways + prep for next session.

## Extra Notes

Some notes from previous conversations, that could be used as inspiration/included somehow:

- [Our current proposal for hyf AI usage expectations (in pr form)](https://github.com/HackYourFuture-CPH/programme/pull/118/files)
- [Suggestions from @te-online](https://github.com/HackYourFuture-CPH/programme/pull/118#issuecomment-3070705560)
- [Github has a whole bunch of public training content for copilot, which we could heavily base ours on](https://skills.github.com/#take-flight-with-github-copilot)
