# Homework

## Part 1

In this exercise you will get some practice creating branches, merging, pushing/pulling to Github, and creating a pull request. Here are the instructions:

1. In your computer, in your `hyf-homework` repository, start by creating a branch for your homework, named `git-week2`, and move to that branch
2. Inside the folder `hyf-homework/git/week2` create a new file named `veggies.txt`, inside the file write the name of 5 veggies, one per line. Commit your changes.
3. Push the branch `git-week2` to github.
4. While on `git-week2`, create a branch named `feature/veggies` and move to that branch.
5. On the file `veggies.txt`, modify the name of the third veggie, and add two more veggies (one per line) at the end. Commit your changes.
6. On Github, go to branch `git-week2` and modify the name of the third veggie in the file `veggies.txt`. Commit your changes.
7. Before pushing the branch `feature/veggies` to github, update it with the latest changes on branch `git-week2` (hint: pull that branch from github and merge it with `feature/veggies`).
8. Now that `feature/veggies` has been updated, push it to github and create a pull request to `git-week2`.
9. Wait for feedback, there will be one more task before merging :)

Commands that you will need for this part:

- `git add <file_name>` - tell git to start tracking a file and to update what will be committed
- `git commit -m "commit_message"` - commit (save) your changes
- `git branch <branch-name>` - to create a new branch named `<branch-name>`
- `git checkout <branch-name>` - to move to a branch named `<branch-name>`
- `git merge <branch-name>` - to merge the branch named `<branch-name>` with the branch where you are.
- `git push origin <branch-name>` - push (upload) your changes in your current branch to your github repository into the branch named `<branch-name>`.
- `git pull origin <branch-name>` - pull (download) your changes from your github repository in the branch named `<branch-name>`, into your current local branch.

**_Note_**
For the sake of consistency (and to avoid mistakes), make sure that when you push you do it to a branch with the same name as the branch where you are, e.g. if you are on a branch named `my-homework` then push to a branch named `my-homework` by typing `git push origin my-homework`.

When pulling, if you want to pull from a branch named, for instance `git-homework`, make sure that you are in a branch with the same name (`git-homework`) on your computer as well, and only then do `git pull origin <branch-name>`.

## Part 2

This part is only for you to do by yourself in your computer so you can see how the commands work and get comfortable with them :)

It is important that after each step you run `git log --oneline` and `git status` to see what has changed. Also check the contents of your folder :)

### Git reset and revert

1. Create a new folder somewhere in your computer, named `reset_playground`;
2. Start a git repository inside `reset_playground` (make sure you are not inside a git repo before you create it!!!)
3. Create a file named `countries.txt`, commit your changes.
4. Add a country name to `countries.txt` and commit your changes. Repeat this 5 times, so that at the end you have 5 country names in your `countries.txt` file and a commit for each.
5. Create a new branch named `feature/more_countries`, move to it.
6. Create a new file, named `more_countries.txt`, add the name of 2 countries to that file and commit your changes.
7. Go back to `master`.
8. Use `git cherry-pick <commit_hash>` to get the commit where you created the file `more_countries.txt` into your master branch (you need to get the commit hash by doing `git log` when you are in the branch `feature/more_countries`).
9. In the file `countries.txt`, add one more country, and commit your changes.
10. Again, in the file `countries.txt`, add one more country, and commit your changes.
11. Remove the latest commit you did using `git reset --soft <commit_hash>`
12. Either commit or stash the changes from the last step.
13. Use `git revert <commit_hash>` to revert the commit that you cherry picked from the branch `feature/more_countries`, the one where the file `more_countries.txt` was added (get the commit hash by doing `git log` and looking for the commit you want).
14. Use `git reset --mixed <commit_hash>` to get rid of the last 2 commits.
15. Either commit or stash the changes from the last step.
16. Use `git checkout <commit_hash>` to check what your repo looked like after your first commit.
17. Now go back to your latest commit using `git checkout master`.
18. Finally, use `git revert <commit_hash>` to revert the commit where you added country number 3. Most likely you will get a conflict and you must solve it.

Commands that you'll need for this part:

- `git log` - see your commit history with all the details
- `git log --oneline` - see your commit history in a single line.
- `git cherry-pick <commit_hash>` - will copy the commit with hash `<commit_hash`> from another branch to your current branch. To find the hash for the commit you want use `git log` on the branch where the commit exists.
- `git checkout <commit_hash>` - you use this to go back to a specific commit and take a look at your code back then, but **do NOT ever** change your code at this point, since you are in a detached HEAD state when you go back to a specific commit. Remember, you wouldn't walk around if your head wasn't glued to your neck :). To go back to your latest commit you just do `git checkout <branch-name>`, where `<branch-name>` is the name of the branch where you are.
- `git revert <commit_hash>` - will revert whatever was done in a specific commit with hash `<commit_hash>`. Be careful with possible conflicts. If you get conflicts and you want to abort the revert, you can do it with `git revert --abort`.
- `git reset --soft <commit_hash>` - will remove all commits until the commit with hash `<commit_hash>`, but the file changes will stay in the staging/index area.
- `git reset --mixed <commit_hash>` - will remove all commits until the commit with hash `<commit_hash>`, but the file changes will stay in your filesystem.

Other useful git commands:

- `git status` - remember, it is your best friend, it tells you what is the state of your repository and sometimes what you should do.
- `git branch` - this is your second best friend, it tells you in which branch you are (you can also see where you are when you do `git status`)
