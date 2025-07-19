# main-social

## License

This project is not open-source. All rights reserved.

You are **not permitted** to use, copy, modify, or distribute any part of this code without **explicit written permission** from the author.

Contact: manvendrasang@gmail.com

npm i -g nodemon --save-dev
npm i express multer gridfs-stream multer-gridfs-storage cors bcrypt jsonwebtoken cors dotenv helmet morgan mongoose body-parser
npm init -y
npm i mongodb #optional

!!!!! CRUCIAL 
Repository can be private or public doesn't really matter as long important credential files such as .env file are hidden from future commits by using a .gitignore file. This is a good practice to keep your credentials safe.

However, if you already made a commit with a .env type file already it is still vulnerable to access, as it is available in the git commit history, so to resolve follow these steps:

Step: 1 {
    Remove .env from cached memory with this command:
    git rm --cached .env
}

Step: 2 {
    If not already added to .gitignore, add .env to .gitignore
}

Step: 3 {
    Commit these changes with an appropriate message(Be sure to save the .gitignore in the root directory and not in a subfolder)
}

Step: 4{
    Remove .env from the commit history with these commands:
    git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD (This command essentially rewrites the commit history to exclude .env)
    Commit the changes with:
    git push --force (This updates the repo with the new history)
}

The above steps are to remove the .env file from the commit history. But in some cases you might need to forcibly remove the .env fromt the commit history, as the above commands are very surface level and cannot assure perfect deletion. In that case you can use the following commands:

1. git log -n 4
2. git rebase -i Head~4
3. change from pick to edit for the commit you want to remove .env from
4. type :wq and enter to come out of the rebase VIM
5. go into the file directory where the commit was made, for eg: cd server
6. then: git rm .env
7. git commit --amend --no-edit
8. git rebase --continue
9. Now recommit everything either via a third party software like gitKraken or by inbuilt git utilities in vscode
10. Once commited, push the changes to the remote repository with: git push --force --all
11.  Verify the changes