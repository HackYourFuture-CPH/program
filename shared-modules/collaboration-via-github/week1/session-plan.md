# Session Plan

## Session materials

These are some examples of previously created materials by mentors that you can use yourself, or for inspiration.

- [Git Advanced Slides](./session-materials/Git_advanced.pdf) (slides used to teach previously)
- [Git Commands Cheat Sheet](./session-materials/cheatsheet.md) (lists lots of git commands used in the session)
- [Additional exercises](./session-materials/additional_exercises.md) (extra exercises that could be used)
- [Resources](./session-materials/resources.md) (additional links and resources for content inspiration and additional learning for trainees)

## Session outline

If you're looking for more inspiration for content to teach, check out the [review](./session-materials/review.md) which covers the session outline in more detail.

1. Why branches?

2. The 3 types of branches:
   - the local non-tracking branches
   - the local tracking branches
   - the remote tracking branches

3. Push/Pull branches to github

4. Create a merge conflict and show how to solve it (use vscode to select which changes to keep).

5. Do an exercise (to basically repeat what was shown before with the slides and all):
   1. create repo `session_example`, both locally and on github
   2. in main, create file `fruits.txt`, add the names of 3 fruits, one per line, Commit your changes.
   3. push `main` to github
   4. from `main`, create branch `feature/fruits`, modify the name of the second fruit and add two new fruits at the end of the file (one per line)
   5. on github, on branch `main`, change the name of the second fruit in the file `fruits.txt`
   6. update your local branch `feature/fruits` with the contents of `main`
   7. push `feature/fruits` to github
   8. create pull request to merge `feature/fruits` into `main`

6. Git diff and git stash:
   1. show the git diff when we make changes in current feature
   2. explain git stash
   3. show git diff (when there are no differences)
   4. explain git stash list and then git stash apply
   5. explain difference between git stash apply and git stash pop
   6. show some more options like git diff --stat

7. How to "remove" commits
   - git reset soft vs. hard
   - git revert
   - git cherry-pick
   - git rebase -i HEAD~N

8. Exercise to create commit use reset soft, and then create another commit use reset hard.

9. Show git checkout to a specific commit.

10. Random things that should be mentioned throughout the session:
    - `git checkout -- <file>` / `git restore <file>` (only works in git 2.23+)
    - `git reset HEAD <file>` / `git restore --staged <file>` (only works in git 2.23+)
    - `git rm --cached`
    - `git commit --amend`
    - show how to check that local branch is up to date with origin (with git log)

11. How to write a good commit message.

12. How to create a good, easy to understand PR.
