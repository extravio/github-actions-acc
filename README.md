# ACC JavaScript Action

## Introduction

Created from the [actions/javascript-action](https://github.com/actions/javascript-action) template.

See [Creating a JavaScript action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
for a general overview.

## Testing

Add the following to package.json
```js
    "type": "module",
    [...]
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
```

[Jest: ECMAScript Modules](https://jestjs.io/docs/ecmascript-modules)

See [Creating an Action using the GitHub Context](https://github.com/actions/toolkit/blob/master/docs/github-package.md) 
for an example of how to mock the Octokit client with nock.



## Resources

[actions/toolkit repo](https://github.com/actions/toolkit/tree/master)

[REST API Documentation](https://docs.github.com/en/github-ae@latest/rest)

[octokit/rest.js](https://octokit.github.io/rest.js/v18)

## Todo

- Handle PR / Maintain code
- Multiple actions in 1 repo. See (codeql-action)[https://github.com/github/codeql-action] for an example