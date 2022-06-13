import * as core from '@actions/core';
import * as github from '@actions/github';

export default async function run() {
    try {
        const myToken = core.getInput('repo_token');

        const octokit = github.getOctokit(myToken);
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