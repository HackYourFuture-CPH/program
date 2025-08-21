# Assignment

Finish all exercises from the session, then do the following:

## Exercise 1

In this exercise you will get some practice submitting your assignment by pushing it to GitHub and then creating a pull request.
You will be using this workflow every week to submit your assignment, so it's important that you get comfortable with it.
You will also practice adding/committing files one by one.

You will use the Assignment repository created on the last session. Here are the instructions:

1. In your terminal, navigate to your session assignment repository on your computer
2. Go to branch `main`
3. Pull the latest changes to make sure your local `main` is up to date
4. Create a branch for your assignment, named `git-week1/your-name`, and move to that branch
5. Inside the folder `git/week1` create 3 new files:
   - a file named `my-favourite-food.txt`, inside the file write your favourite dish recipe (you can just find a random recipe on Google and paste it in the file ;)
   - a file named `my-second-favourite-food.txt`, inside the file write the recipe for your second favourite dish
   - a file named `countries.txt`, where you list three countries that you have visited (this doesn't need to be true, you can just write the names of three random countries)
6. Add and commit the file `my-favourite-food.txt`
7. Add and commit the file `my-second-favourite-food.txt`
8. Add and commit the file `countries.txt`
9. Push your changes into your class assignment repository on GitHub
10. Go to GitHub and create a pull request (PR) from the branch `git-week1/your-name` to `main`

## Cheat sheet / tips

Commands that you will need:

- `git branch <branch-name>` - to create a new branch named `<branch-name>`
- `git checkout <branch-name>` - to move to a branch named `<branch-name>`
- `git add <file_name>` - tell git to start tracking a file and to update what will be committed
- `git add .` - add all modified files to staging for commit
- `git commit -m "commit_message"` - commit (save) your changes
- `git push origin <branch-name>` - push (upload) your changes in your current branch to your GitHub repository into the branch named `<branch-name>`.

**_Note_**
For the sake of consistency (and to avoid mistakes), make sure that when you push you do it to a branch with the same name as the branch where you are, e.g. if you are on a branch named `git-week1` then push to a branch named `git-week1` by typing `git push origin git-week1`.

When pulling, if you want to pull from a branch named, for instance `main`, make sure that you are in a branch with the same name (`main`) on your computer as well, and only then do `git pull origin <branch-name>`.

Other useful git commands:

- `git status` - remember, it is your best friend, it tells you what is the state of your repository and sometimes what you should do.
- `git branch` - this is your second best friend, it tells you in which branch you are (you can also see where you are when you do `git status`)
- `git log`
- `git log --oneline`
- `git pull origin <branch-name>` - pull (download) your changes from your GitHub repository in the branch named `<branch-name>`, into your current local branch.

Command line commands that might be useful:

- `pwd`- print working directory, to know where you are
- `cd <folder_name>` - to go inside a folder named `<folder_name>`
- `cd ..`- to go to the parent folder of your current folder
- `mkdir <folder_name>` - to create a new folder
- `ls`- list all the folder contents
- `ls .*` - list all the folder contents, also invisible folders/files (e.g. the git folder)
