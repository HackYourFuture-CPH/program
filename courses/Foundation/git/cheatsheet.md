# Cheat sheet

Here are the commands we used in the session (and a few more) and their meaning.

## Command line

- `pwd` - stands for 'print working directory' and you use it to know in which directory you are.
- `cd <folder-name>` - stands for 'change directory', and you use it to go inside `folder-name`.
- `cd ..` - to go to the parent folder of your current folder.
- `mkdir <folder-name>` - stands for 'make directory' and you use it to create a new folder with `folder name`.
- `ls` - stands for 'list' and you use it list all the folder contents.
- `ls .*` - list all the folder contents, also invisible folders/files (e.g. the .git folder).
- `rm <file-name>` - THIS IS DANGEROUS!!! It removes the file named `file-name` FOREVER, you can NEVER recover it.

To remove a git repository but still keep your files do `rm -rf .git` in the folder where you have the repository. All the git information is lost when you do this.

## Git

### Part 1

We used these commands in the first part of the session to work with a local git repository on our own computers.

- `git add <file-name>` - tells git to start tracking a file or to update what will be committed. Always do that before `git commit`.
- `git commit -m "commit-message"` - commit your changes.
- `git push origin <branch-name>` - push (upload) your changes in your current branch to your GitHub repository into the branch named `<branch-name>`.
- `git status` - shows you which files are ready to be committed, or not tracked by git. Often tells you what to do as well. It is your best friend when using git :)
- `git log` - shows the history of commits in the current branch.
- `git log --oneline` - shows the history of commits in the current branch in a single line per commit.
- `git diff <file-name>` - to see the difference between the file contents now and in the latest commit.

Note: if you do `git add .` instead of `git add <file-name>` you will add all files in your current folder.

### Part 2

We used these commands in the second part of the session to create a branch, go to it, commit our changes on that branch, and then push it to GitHub.

- `git branch <branch-name>` - create a new branch `<branch-name>`.
- `git checkout <branch-name>` - go to branch `<branch-name>`.
- `git branch` - check which local branches you have and where you are (in green).
- `git push origin <branch-name>` - push (upload) your local changes in your current branch into the branch named `branch-name` in your GitHub repository.

### Extras

Commands we didn't use in the session but that might be useful for you:

- `git pull origin <branch-name>` - pull (download) your changes from your GitHub repository in the branch named `<branch-name>`, into your current local branch.
- `git checkout --file <file-name>` - use if you changed the file named `file-name` and want to revert the changes, i.e. to get back the version you had in the last commit
- git

  **_Notes_**

  For the sake of consistency (and to avoid mistakes), make sure that when you push you do it to a branch with the same name as the branch where you are, e.g. if you are on a branch named `my-assignment` then push to a branch named `my-assignment` by typing `git push origin my-assignment`.

  When pulling, if you want to pull from a branch named, for instance `git-assignment`, make sure that you are in a branch with the same name (`git-assignment`) on your computer as well, and only then do `git pull origin <branch-name>`.
