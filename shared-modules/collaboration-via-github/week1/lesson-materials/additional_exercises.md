# Class exercises for the flipped classroom

These are the suggested exercises when using the flipped classroom method.

The key goal of the class is for the students to be able to use git/github to collaborate in the final project.

## Exercise 1

This exercise is about mimicking collaboration between two people on the same project.
The workflow is the same that the students will use during the final project.

1.  create a repo named `git_exercise_1` on github;
2.  clone the repo you just created on github;
3.  on your computer, on the `master` branch create the file `fruits.txt`, add the names of 3 fruits, one per line, and commit your changes;
4.  push `master` to github;
5.  on your computer, from `master` create the branch `feature/fruits` and move to it;
6.  on your computer, modify the name of the second fruit, add two new fruits at the end of the file (one per line), and commit your changes;
7.  on github, on branch `master`, change the name of the second fruit in the file `fruits.txt`
8.  update your local branch `feature/fruits` with the contents of the branch `master` on github
9.  push `feature/fruits` to github
10. create pull request to merge `feature/fruits` into `master`

**Note**: the students will get a merge conflict on step 8.

## Exercise 2

The goal of this exercise is to learn how to get rid of a particular commit, that is not the latest commit.

1.  clone the repo: <https://github.com/martamatos/cherry_pick_exercise.git>
2.  in the branch add_fruits, get rid of the commit "added beetroots file". Hint: you need to create a new branch and use cherry-pick.
3.  in the branch add_veggies, get rid of the commit "added apples".
    Hint: You can either use one of the following approaches:

- create a new branch and use cherry-pick. (This one will lead to a conflict).
- use interactive rebasing on the branch. (This one will lead to a conflict).

Note: use git log --all --oneline to see all commits in all branches (the --oneline part is only to see a shorter version of the log).

## Exercise 3

This is about git revert and how you can get conflicts when you use it.
The goal is that the students learn why sometimes they get conflicts when doing git revert and sometimes they don't.

1.  clone the repo: <https://github.com/martamatos/revert_exercise.git>
2.  revert the commit where file a was added.
3.  revert the commit where sweden was added. (This will lead to a conflict).

## Exercise 4

This exercise is about git stash (and reset or commit --amend)

1.  create a new repository on github called `git_exercise_4`;
2.  clone the repo you just created on github;
3.  create a new file in the repo called `project.txt`;
4.  write "Hello world!" on `project.txt`, commit, and push the changes to the github;
5.  create a new local branch `feature/new_sentence` and write "learning code" on the second line, commit, and push the branch to github;
6.  on the local branch `feature/new_sentence`, edit the second line to "learning code javascript" and save the file, do **not** commit;
7.  move to master, you should get an error, remember you don't want to commit because your feature is not complete yet, but you still need to move to master;
8.  once you are on `master`, you want to work on a different feature so create a new local branch named `feature/new_number`;
9.  on branch `feature/new_number`, add a new line with number 1 to `project.txt`, commit, and push to github;
10. go to github and on the branch `feature/new_number` add one more line with number 2 to `project.txt`;
11. on your computer, add a new line with number 3 to `project.txt` and save, do **not** commit;
12. pull the `feature/new_number` branch (oh, what a message again! remember, you don't want to commit!);
13. finish the pull;
14. check list of all stashes you have;
15. go to `feature/new_sentence` branch, bring back the stash you did in this branch, push to github;
16. go to `feature/new_number` branch, bring back the stash you did in this branch, solve the conflict and commit (do **not** push);
17. before you push `feature/new_number` to github you noticed a mistake in the commit message;
18. remove the commit, create correct commit message and push to github;
19. your project is finished :)
