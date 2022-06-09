const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    // try {
        // const myToken = core.getInput('repo_token');
        // const adoRepo = core.getInput('ado_repo_name');

        // const octokit = github.getOctokit(myToken);

        const myToken = core.getInput('repo_token');

        const octokit = github.getOctokit(myToken);
        console.log(octokit);

        // const { data: repos } = await octokit.repos.listForAuthenticatedUser();
        const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser();
        
        console.log(repos);
                   
    // }
    //     catch (error) {
    //     core.setFailed(error.message);
    //     throw error;
    // }
}

run();