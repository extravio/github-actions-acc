import fs from 'node:fs';

// The first argument is the name of the new action
const actionName = process.argv[2];
if (!actionName) throw new Error("Please specify an action name");
console.log(`Scaffolding action ${actionName}`);

// src/<actionName>.js
const actionFilePath =  `./src/${actionName}.js`;
fs.copyFile('./scaffold/src/template.js', actionFilePath, fs.constants.COPYFILE_EXCL, (err) => {
  if (err) throw err;
  console.log(`File created: ${actionFilePath}`);
});

// src/<actionName>.test.js
const actionTestFilePath =  `./src/${actionName}.test.js`;
fs.copyFile('./scaffold/src/template.test.js', actionTestFilePath, fs.constants.COPYFILE_EXCL, (err) => {
    if (err) throw err;
    console.log(`File created: ${actionTestFilePath}`);

    fs.readFile(actionTestFilePath, 'utf8', function (err,data) {
        if (err) throw err;
        var result = data.replace(/<template>/g, actionName);
        fs.writeFile(actionTestFilePath, result, 'utf8', function (err) {
            if (err) throw err;
        });
    });
    console.log(`File updated: ${actionTestFilePath}`);
});

// Creates the action folder
const actionFolder =  `./action-${actionName}`;
fs.mkdir(actionFolder, { recursive: false }, (err) => {
    if (err) throw err;
});
console.log(`Folder created: ${actionFolder}`);

// action-<actionName>/action.yml
const actionYmlFilePath =  `${actionFolder}/action.yml`;
fs.copyFile('./scaffold/action.yml', actionYmlFilePath, fs.constants.COPYFILE_EXCL, (err) => {
    if (err) throw err;
    console.log(`File created: ${actionYmlFilePath}`);

    fs.readFile(actionYmlFilePath, 'utf8', function (err,data) {
        if (err) throw err;
        var result = data.replace(/<action>/g, actionName);
        fs.writeFile(actionTestFilePath, result, 'utf8', function (err) {
            if (err) throw err;
        });
    });
    console.log(`File updated: ${actionYmlFilePath}`);
});

// .github/workflows/<actionName>.yml
const workflowYmlFilePath =  `.github/workflows/${actionName}.yml`;
fs.copyFile('./scaffold/workflow.yml', workflowYmlFilePath, fs.constants.COPYFILE_EXCL, (err) => {
    if (err) throw err;
    console.log(`File created: ${workflowYmlFilePath}`);

    fs.readFile(workflowYmlFilePath, 'utf8', function (err,data) {
        if (err) throw err;
        var result = data.replace(/<action>/g, actionName);
        fs.writeFile(actionTestFilePath, result, 'utf8', function (err) {
            if (err) throw err;
        });
    });
    console.log(`File updated: ${workflowYmlFilePath}`);
});
