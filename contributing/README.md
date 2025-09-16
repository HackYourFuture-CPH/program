# Contributing

Everyone is welcome to fork/clone the repo and contribute to improving the program.

If you would like to take a more active role in contributing as a volunteer of HYF Denmark, join #curriculum-crew on Slack to get involved.
Write in there to introduce yourself, and a staff member will onboard you and set you up with permissions.

## How to contribute

This project is a collection of structured README files. To maintain consistency and quality, we use a linter and suggest some recommended editor extensions.

### 1. Install dependencies

First, make sure you have [Node.js](https://nodejs.org/) installed.

Then, install the project dependencies using:

```bash
npm ci
```

This ensures a clean and reproducible setup based on the `package-lock.json`.

### 2. Set up your editor (optional but recommended)

If you are using [Visual Studio Code](https://code.visualstudio.com/), we have a list of recommended extensions in `.vscode/extensions.json`. When you open the project in VSCode, it will automatically suggest installing them to improve your development experience.

These extensions help with linting and maintaining the project’s standards.

### 3. Make your changes

Edit or create README files as needed. Follow the existing formatting and writing style.

### 4. Run the linter

Before committing your changes, make sure everything passes the linter.

To check for linting issues:

```bash
./lint
```

To automatically fix some issues:

```bash
./lint --fix
```

> [!TIP]
> On **Windows** you cannot run bash scripts natively. In this case, open the folder in your Git Bash shell and run the commands from in there.

### Existing issues

Very briefly: check the project board "Todo" column, choose one ideally near the top, assign it, clone the repo, do it, make a PR, get feedback, profit.

### New ideas

Very briefly: Create an issue on this repo, get some feedback, and we'll prioritize them together at the next meeting.

Note: You are always welcome to open issues/create PRs for new ideas, whenever you like. It's an open source project. If we are currently working together towards a project goal, then it would be most helpful to prioritize tasks for that first, though.

## How permissions work

Permissions are managed through GitHub teams, their roles on this repo, and branch rules.

- _HYF Staff_ members have the admin role (to do things like changing repo settings, inviting new contributors).
- Members of the _Curriculum Crew_ team on GitHub have the write role (to do things like cloning, pushing branches, approving PRs - any volunteer is welcome here!).
- Two approvals by anyone in _Curriculum Crew_ or _HYF Staff_ are required on a PR before merging is allowed.
- Merging to Main can be performed by any _HYF Staff_ member.
