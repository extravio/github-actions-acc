import * as core from '@actions/core';
import * as github from '@actions/github';

export default async function run() {
    try {
        const myToken = core.getInput('repo_token');
        const token = (myToken) ? myToken : "token";
        console.log(token);


        // const client = github.GitHub(myToken);
        // const { data: repos } = await client.repos.listForAuthenticatedUser();


        const octokit = github.getOctokit(token);
        const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser();
        
        console.log(repos);
        return repos;
    }
    catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

run();