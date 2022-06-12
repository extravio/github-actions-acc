const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
        const myToken = core.getInput('repo_token');
        const octokit = github.getOctokit(myToken);
        const { data: repos } = await octokit.rest.repos.listPublic();
        console.log(repos);
}

run();