# Lesson plan

## Lesson materials

These are some examples of previously created materials by mentors that you can use yourself, or for inspiration.

- [Introduction to Git](https://radical-somersault-80b.notion.site/Introduction-to-Git-184dc1cafb9480ffad0de16e6ea8b379) (by [@aina21](https://github.com/aina21), Team 31)

## Lesson outline

1.  What is version control?

    - Version control is like a super-organized notebook that keeps a history of all the changes made to your project folders and files. It lets you:
      - Go back to older versions if something goes wrong
      - See who made each change
      - Work with others without overwriting each other’s work
    - Google docs demonstration

2.  Git - the most popular version control system

    - Git is a version control system, widely used by software developers (and not only). Think of it as a smart time machine for your files—especially code or text documents.
      - **Save a snapshot** of your project (called a **commit**) at any point
      - **Compare** changes between versions
      - **Work together** with other people and combine everyone’s work smoothly
      - **Experiment** with new ideas safely, without messing up the main project

3.  Git vs. GitHub ([Slide 3 from Git-basics.pdf](Git-basics.pdf))

    - Git

      - Version control software on your computer
      - Works offline (no need for internet)
      - Command-Line Interface based, but has various graphical interface alternatives as GitHub Desktop, GitKraken, SourceTree

    - GitHub
      - Website that hosts Git repositories in the cloud
      - Web interface for viewing code and changes
      - Collaboration tools (pull requests, projects, issues, comments)
      - Enabled social coding (followers, stars, forks, use profiles)

4.  Install Git if not done already

5.  Configure Git

    - `git config --global user.name "name"`
    - `git config --global user.email "email"`
    - `git config --global core.editor "code -w"` (without `-w` the commit is aborted with empty message)

6.  Command line basics

    - `pwd`, and explain how paths work
    - `ls`
    - `cd`
    - `cd ..`
    - `mkdir`
    - do a little exercise

7.  What is a repository and how to create one ([Slide 4, Git-basics.pdf](Git-basics.pdf))

    - kind of a folder, but not all files in the folder have to be in the repository
    - `git init`
    - Clone an existing repository

    Golden rule:

    - ALWAYS make sure you are not inside a git repository when you create a new one. You can check by typing `git status` in your Terminal. If you get an error it means you are not inside a git repository and you can safely create a new one.

8.  The commit ([Slide 7, Git-basics.pdf](Git-basics.pdf))

    - a snapshot of the entire repository
    - who made the changes
    - when the changes were made
    - a message describing the changes in the commit

9.  Demonstration to making a commit

    - what happens after each `git add` and `git commit`
    - show `git status` and `git log`

10. Explain what happens after `git push`

11. Branches (Exercise 2, [GIt-branches.pdf](GIt-branches.pdf))

    1. Create a branch
    2. Make a commit
    3. push changes to remote
    4. Create a pull request
    5. Update local `main`

12. Useful VS Code extensions

- GitLens - Git supercharged
- GitHub Pull Requests

### Exercise 1: Assignments repository

**Objective:** Create a repository on your GitHub by clicking "Use this template" from [hyf-assignment-template](https://github.com/HackYourFuture-CPH/hyf-assignment-template). Then you will add the session exercises from the previous week, to the `html-css/week1` folder, by first checking out to a new branch called `html-and-css`. Create a PR introducing those changes to `main`. Finally, have the person on your right review this PR before you agree to merge it to `main`.

- Use descriptive `commit` messages
- Make a commit for each folder/exercise you add (makes it easier to track changes/updates)
- Switch between the Terminal and GitHub on each `commit` and `push` to learn better what each command exactly does
- Merge, after the person on your right has reviewed and **approved**. You might need to first address any comments they might have.

### Exercise 2

1. When you are on `main` branch, of the assignment repository create a branch named `git-week1/exercise-1/<your-name>` and move to it
2. Create a folder named `session-playground` in the `git` folder, under `/week1`
3. Create the following files inside the `session-playground` folder: `apples-file.txt`, `bananas-file.txt`, `oranges-file.txt`
4. Add some text to each of the files
5. Add and commit the `apples-file.txt`
6. Add and commit both the `oranges-file.txt` and the `bananas-file.txt`
7. Add more text to the `apples-file.txt`
8. Add and commit the changes in the `apples-file.txt`
9. Push your changes to GitHub
10. Go to the branch on GitHub and look at the commits, analyze and discuss how it looks and how it connects with what you just did

### Exercise 3

**Objective:** The goal of this exercise is to practice the assignment workflow.

1. When you are on `main` branch, create a branch named `git-week1/exercise-3/<your-name>` and move to it
2. Create a file named `my-assignment.txt` in the `git` folder, under `/week1/session-playground`
3. Add some text to the `my-assignment.txt` file
4. Add and commit the changes in the `my-assignment.txt` file
5. Add more text to the `my-assignment.txt` file
6. Add and commit the changes in the `my-assignment.txt` file
7. Push your changes to GitHub
8. On GitHub, create a pull request from the exercise branch to `main`
9. On your computer add some more text to the `my-assignment.txt` file
10. On your computer, add and commit the changes in the `my-assignment.txt` file
11. Push the changes to GitHub
12. On GitHub, check what happened to the pull request you created in step 8.
13. If you are on an individual assignment repository approach, merge the PR and proceed to the next step. If you are on a central assignment repository approach, DO NOT merge the PR, and skip the next step.
14. Go to the `main` branch and update `main` by "downloading" the new commits from GitHub: `git pull origin main`.

### Exercise 4

**Objective:** Face your first Git error and try to find a solution online on your own.

1. On your assignment repository go to the branch `main`, create a branch `git-week1/exercise-4/<your-name>` and move to it
2. In the `git` folder, under `/week1/session-playground`, create a file named `colors.txt`
3. Add two colors to the file `colors.txt`, one per line
4. Add and commit the changes in the `colors.txt` file
5. Push the branch `git-exercise-4` to GitHub.
6. **On GitHub**, go to the branch `git-exercise-4` and add a color in the last line of the file `colors.txt`, commit your changes
7. **On your computer**, add a color in the first line of the file `colors.txt`, add and commit your changes
8. Push the branch `git-exercise-4` to GitHub. Discuss what is happening and how to solve it.

### Exercise 5

**Objective:** Learn to handle a common mistake of forgetting to checkout to the right branch, when already having a few commits pushed.

1. On your assignment repository **DON'T** go to the main branch, make sure to stay on the branch from the previous exercise.
2. Create a branch `git/week1/exercise-5/<your-name>` and move to it
3. In the `git` folder, under `/week1/session-playground`, create a file named `movies.txt`
4. Add two movie names to the file `movies.txt`, one per line
5. Add and commit the changes in the `movies.txt` file
6. Push the branch `git-exercise-5` to GitHub.
7. On GitHub, create a pull request from your new branch to `main`.
8. See what commits you have there - do you only have commits from this exercise? Do you have commits that should not be here? Discuss why it happened and how to solve this situation.

### Exercise 6: Into the deeps

**Objective:** Get comfortable with branching. Take notes of the answers to the questions in points 14, 15, 16, 17, 18, 19, 22, 23, 25, and 26. Discuss the answers in pairs.

1. Create a new folder in your Desktop called `branch-exercise`
2. Using the command line go to that folder and create a new repository there (`git init`)
3. Create a new file in that folder called `countries.txt`
4. Add two country names (one per line) to the `countries.txt` file
5. Commit your changes
6. Create a new branch named `add-countries`, move to that branch
7. Add two more country names (one per line) to the `countries.txt` file
8. Commit your changes
9. Go back to `main`
10. Create a new branch named `add-cities`, move to that branch
11. Create a new file named `cities.txt`
12. Add two city names (one per line) to the `cities.txt` file
13. Commit your changes
14. Go back to `main` and take a look around your folder. Which files do you see? What are their contents?
15. Do `git log --oneline`. Which commits do you see?
16. Go to the `add-countries` branch and take a look around your folder. Which files do you see? What are their contents?
17. Do `git log --oneline`. Which commits do you see?
18. Go to the `add-cities` branch and again take a look around your folder. Which files do you see? What are their contents?
19. Do git `log --oneline`. Which commits do you see?
20. Now go to `main`
21. Merge the branch `add-countries` with main (`git merge add-countries`)
22. Take a look at your folder, which files do you see? What are their contents?
23. Do `git log --oneline`. Which commits do you see?
24. Now merge the branch `add-cities` with main (`git merge add-cities`)
25. Take a look at your folder, which files do you see? What are their contents?
26. Do `git log --oneline`. Which commits do you see?

## Other material and links

- **[Cheat-sheet](cheatsheet.md)** - sheet of the commands used during the session
- **[Git Basics](Git-basics.pdf)** - the slides used to teach some concepts during the session.
- **[Learn Git Branching](https://learngitbranching.js.org/)** - interactive website for... learning Git branching
- **[Oh My Git](https://ohmygit.org/)** - open source game for learning everything Git
