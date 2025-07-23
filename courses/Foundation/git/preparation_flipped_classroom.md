# Preparation for flipped classroom

This is the preparation for the flipped classroom (vs. "old style" presential classes).

## Setting up Git/Github

Github:

- if you haven't created an account on [github.com](https://github.com/) yet, please create it now :)

Git:

- please install git before Sunday:

- for mac users: running `brew install git` on the command line should work;
- for ubuntu people (or any debian based linux): run `sudo apt-get install git` on the command line
- for windows people: download Git for Windows [here](https://gitforwindows.org/) and install. Step by step instructions:

  1. execute the file you downloaded;
  2. on the `Information` screen, click next;
  3. on the `Select Destination Location` screen, click next;
  4. on the `Select Components` screen, click next without changing anything;
  5. on the `Select Start Menu Folder` screen, click next;
  6. `Choosing the default editor used by Git`, select `Use Vim` and click next;
  7. `Adjusting the name of the initial branch in new git repositories`, select `Let Git decide`
  8. `Adjusting your path environment`, select `Use Git from Git Bash only` and click next;
  9. `Choosing HTTPS transport backend`, select `Use the OpenSSL library` and click next;
  10. `Configuring the line ending conversions`, select `Checkout Windows-style, commit Unix-style line endings` and click next;
  11. `Configuring the terminal emulator to use with Git Bash`, select `Use MinTTY` and click next;
  12. `Choose the default behaviour of "git pull"`, choose `Default (fast-forward or merge)`
  13. `Choose a credential helper`, choose `Git Credential Manager Core`
  14. `Configuring extra options`, select `Enable file system caching` and `Enable Git Credential manager`, click next;
  15. `Configuring experimental options`, do not select any of them, and click install;
  16. and you should be pretty much done :)

- it is **\*very important** that you do the following as well:
  - configure git by following the instructions [here](https://drive.google.com/file/d/1nS-IvE7iJtUiUzxJdukXBFgt8OoAjuiY/view?usp=sharing);
  - set up your ssh keys by following [this video](https://drive.google.com/file/d/1qDA4g3WcaHI_qbvOgB4cVLoVsi8HCcC2/view?usp=sharing). The instructions on Github can be found [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Optionally, if you are using Windows and want to use git bash on VSCode, check the instructions in the first answer [here](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal) on how to do that. If you are using linux or macOS, it works right out of the box.

## Class videos

Since this is a flipped classroom, where you prepare the class during the week and then the Sunday
session is focused on exercises and answering your questions, it is **_extremely important_** that you watch the following videos (you do not need to reproduce all the steps steps, just focus on trying to understand what's happening):

- [introduction to version control and git](https://drive.google.com/file/d/1lHO7AjtuADB7taS7HrukKL0PLhKUjJUj/view?usp=sharing);
- [introduction to the command line](https://drive.google.com/file/d/1DT6jkB-VFemyKZYhpAzXtNKC4Fm2soNy/view?usp=sharing) ;
- [git basics, part 1](https://drive.google.com/file/d/1ZVExfsf1W21aprmVVk8swQy9lk0iEw06/view?usp=sharing);
- [git basics, part 2](https://drive.google.com/file/d/1arPYP_lh91xoDn1SYTKnq1PuejI8hWNQ/view?usp=sharing);
- [git branches](https://drive.google.com/file/d/1znEHlVDwBXFZZnZdLOyd3zMEF7N9kagw/view?usp=sharing);
- [git branches extra](https://drive.google.com/file/d/11m_is5nD3Wb5R1zr6cGlAfhZWDILqXNp/view?usp=sharing);
- [how to solve merge conflicts](https://drive.google.com/file/d/1-7Evus2Fh7KDRlmD48eY9ZTQ9FVT0D6_/view?usp=sharing).

## Extra readings

And if you have a some extra time, you can read the following articles:

- What is version control: <https://www.atlassian.com/git/tutorials/what-is-version-control> (5 min)
- What is git: <https://www.atlassian.com/git/tutorials/what-is-git> (6 min)
- Git and Github in Plain English: <https://blog.red-badger.com/2016/11/29/gitgithub-in-plain-english>

We'll be roughly following the [materials here](./review.md), in case you want to take a look.
