1. create a repo in githup
2. clone it to machine
3. add .gitignore file (custom make one at gitignore.io)
4. open folder in vscode
5. open terminal
6. run `npm init`   answer prompts as appropriate
7. add eslint: `npm install --save-dev eslint`
8. add google eslint config: `npm install --save-dev eslint-config-google`
9. add the following to folder .vscode/settings.json file:
   1.  `{
    "files.exclude": {
        ".history": true
    },
    "eslint.autoFixOnSave": true
}`
10. start coding in new file index.js
    