# Part 1 - Learning the Shell

## 1. What is the Shell?
* Shell is program that takes keyboard commands and sses them to the operating system to carry out
* Bash (Bourne Again SHell) usually supplied by most Linux distributions
* Terminal Emulators give us access to the shell (one is usually supplied by a given OS) 
* Shell prompt consists of a few elements (*username@machinename* followed by current working directory and a dollar sign) ([me@linuxbox ~] $)
* Ctrl-C and Ctrl-v do not work for typical GUI usage. Have different meanings in the shell
* Ending the Terminal Session: **exit**


### Further Reading

* [Steve Bourne](https://wikipedia.org/wiki/Steve_Bourne)
* [Brian Fox](https://wikipedia.org/wiki/Brian_Fox_(computer_programmer))
* [Shells](http://en.wikipedia.org/wiki/Shell_(computing))






## 2. Navigation
* Files organized with a hierarchical directory structure in a tree-like pattern of *directories* which may contain files and other directories
* first file in the system is called the *root directory* which contains files and subdirectories (which contain even more files and subdirectories)
* *How does this differ from Windows?* W has a seperate files system for each storage device whereas Linux has a single file system tree
* The directory we are currently in is called the *current working directory*. To display the current wokring directory, use the **pwd** command
* **ls** lists the files and directories in the current working directory
* We use **cd** to change our working directory, followed by the pathname to the desired working directory.
* A *pathname* is the route we take along the branches of the tree to get to the directory we want and we can specify the pathname as an absolute pathname or relative pathname
* **Absolute Pathnames** begins with the root directory and follows the tree branch by branch until the path to the desired directory or file is completed ()



## 3. Exploring the System





