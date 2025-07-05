# Preparation

Readings:

- What is Version Control: <https://www.atlassian.com/git/tutorials/what-is-version-control> (5 min)
- What is Git: <https://www.atlassian.com/git/tutorials/what-is-git> (6 min)

Github:

- please, create an account on [Github.com](https://github.com/) if you haven't created one yet

Git:

- Install Git before the Sunday session:

- Mac: it should be sufficient to run `brew install git` in the Terminal
  - Homebrew is a popular package manager for macOS (and Linux), used to easily install and manage software via the command line. You can install it easily by following the instructions on [https://brew.sh/](https://brew.sh/)
- Ubuntu (or any Debian based Linux system): run `sudo apt-get install git` in the Terminal
- Windows: [download and install Git for Windows](https://gitforwindows.org/). Step by step instructions:

  ![Git for Windows download page](git-windows.jpg)

  1. Scroll to the bottom of the [download git page](https://github.com/git-for-windows/git/releases/latest) and download the latest version `.exe` file. It would generally be the most downloaded file from the list.
  2. execute the file you downloaded
  3. on the `Information` screen, click next
  4. on the `Select Destination Location` screen, click next
  5. on the `Select Components` screen, click next without changing anything
  6. on the `Select Start Menu Folder` screen, click next
  7. `Choosing the default editor used by Git`, select `Use Vim` and click next
  8. `Adjusting the name of the initial branch in new git repositories`, select `Let Git decide`
  9. `Adjusting your path environment`, select `Use Git from Git Bash only` and click next
  10. `Choosing HTTPS transport backend`, select `Use the OpenSSL library` and click next
  11. `Configuring the line ending conversions`, select `Checkout Windows-style, commit Unix-style line endings` and click next
  12. `Configuring the terminal emulator to use with Git Bash`, select `Use MinTTY` and click next
  13. `Choose the default behaviour of "git pull"`, choose `Default (fast-forward or merge)`
  14. `Choose a credential helper`, choose `Git Credential Manager Core`
  15. `Configuring extra options`, select `Enable file system caching` and `Enable Git Credential manager`, click next
  16. `Configuring experimental options`, do not select any of them, and click install
  17. and you should be pretty much done :)

- it is **\*very important** that you set up your SSH keys by following those [instructions on Github](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), or [this video](https://drive.google.com/file/d/1qDA4g3WcaHI_qbvOgB4cVLoVsi8HCcC2/view?usp=sharing)

Optionally, if you are using Windows and want to use Git Bash on VS Code, [follow the instructions in this StackOverflow answer](https://stackoverflow.com/a/50527994/1121986). Linux and MacOS users don't need to do anything related to that - Git Bash on VS Code works right out of the box.
