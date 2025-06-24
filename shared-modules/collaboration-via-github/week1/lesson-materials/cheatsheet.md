# Cheat sheet

Here are the commands we used in the class and their meaning.

Commands to deal with branches:

- `git branch <branch_name>` - create a new branch `<branch_name>`.
- `git checkout <branch_name>` - go to branch `<branch_name>`.
- `git branch` - check which local branches you have and where you are (in green).
- `git branch -a` - show both local and remote tracking branches.
- `git branch -vv` - to see local tracking branches.
- `git merge <branch_name>` - merges the branch `<branch_name>` into your current branch.
- `git merge <remote>/<branch_name>` - merges the remote branch `<branch_name>` into your current branch.
- `git branch -d <brach_name>` - delete the branch `<branch_name>`.
- `git branch -u <remote>/<brach_name>` - make the current branch a local tracking branch for the branch `<remote>/<branch_name>`.

Commands to interact with Github:

- `git clone <github_repository_url>` - clone a remote github repository.
- `git remote add <remote> <github_repository_url>` - adds a link between your local repository and the remote github repository with the url `<github_repository_url>`. `<remote>` is typically `origin`.
- `git remote -v` - shows a list of remotes and respective URLs.
- `git push  <remote> <branch_name>` - push your local changes in your current branch into the branch `<branch_name>` in the `<remote>` github repository.
- `git fetch  <remote> <branch_name>` - gets all changes on <branch_name> in the `<remote>` github repository but does **not** merge them with your current branch. This is useful if you just want to check what the difference is between a remote branch and a local branch.
- `git pull origin <branch_name>` - gets all changes on <branch_name> in the `<remote>` and merges them with your current branch.

Some mixed commands:

- `git init` - start a new git repository in the folder where you are (always do `git status` before `git init` to make sure you are not inside a git repository already).
- `git status` - remember, it is your best friend, it tells you what is the state of your repository and sometimes what you should do.
- `git branch` - this is your second best friend, it tells you in which branch you are (you can also see where you are when you do `git status`)
- `git log` - shows the history of commits in the current branch. Also allows you to see if branches are synchronized.
- `git log --oneline` - shows the history of commits in a summarized form.
- `git rm --cached <file_name>` - removes the file with name `<file_name>` from your git repo, so it won't be tracked by git anymore, but the file stays in your computer, it is not deleted.
- `git cherry-pick <commit_hash>` - will copy the commit with hash `<commit_hash`> from another branch to your current branch. To find the hash for the commit you want use `git log` on the branch where the commit exists.
- `git rebase -i HEAD~<N>` - will rebase the last `<N>` commits. It will allow you to drop/remove a commit from the middle or change the content of a commit from the past.

Commands for stashing:

- `git stash` - will stash your current changes, i.e., save them in a safe place so you can move to other branches without your changes being overwritten.
- `git stash list` - will show the list of all stashes you have.
- `git stash pop <stash_id>` - will recover the changes in `<stash_id>` for you and delete them from the stash list. You can get the `<stash_id>` by doing `git stash list`, it looks like `stash@{0}`, where the 0 can be any number.
- `git stash apply <stash_id>` - will recover the changes in `<stash_id>` for you. The changes will not be deleted from the stash with this command.

Commands for checking differences:

- `git diff` - will show all the changes in the files in your workspace, that are not staged for commit yet (i.e. you didn't do git add yet).
- `git diff --staged` - will show all the changes in the files in your staging/index are (i.e. after you do git add).
- `git diff --stat` - shows which files in your workspace have been changed, and the type of changes (adding and/or removing content).
- `git diff --staged --stat` - shows which files in your staging/index area have been changed, and the type of changes (adding and/or removing content).
- `git diff <branch_name>` - shows the differences between your current branch and another branch named `<branch_name>`.
- `git diff <commit_hash>` - shows the differences between your current commit and a specific commit with hash `<commit_hash>`.
- `git diff <commit_hash_1> <commit_hash_2>` - shows the differences between two specific commits, one with hash `<commit_hash_1>` and the other with hash `<commit_hash_2>`.

Commands to go back in history:

- `git checkout <commit_hash>` - you use this to go back to a specific commit and take a look at your code back then, but **do NOT ever** change your code at this point, since you are in a detached HEAD state when you go back to a specific commit. Remember, you wouldn't walk around if your head wasn't glued to your neck :). To go back to your latest commit you just do `git checkout <branch_name>`, where `<branch_name>` is the name of the branch where you are.
- `git revert <commit_hash>` - will revert whatever was done in a specific commit with hash `<commit_hash>`. Be careful with possible conflicts. If you get conflicts and you want to abort the revert, you can do it with `git revert --abort`.
- `git reset --soft <commit_hash>` - will remove all commits until the commit with hash `<commit_hash>`, but the file changes will stay in the staging/index area.
- `git reset --mixed <commit_hash>` - will remove all commits until the commit with hash `<commit_hash>`, but the file changes will stay in your filesystem.
- `git reset --hard <commit_hash>` - will remove all commits until the commit with hash `<commit_hash>`, as well as the changes in your files. Be very careful with this one!

Note: you can get the commit hash for a specific commit using either `git log` or `git log --oneline`
