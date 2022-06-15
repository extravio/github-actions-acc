import * as core from '@actions/core';
import * as github from '@actions/github';

export default async function run() {
    try {
        const myToken = core.getInput('repo_token');
        // github repo
        const owner = core.getInput('owner');
        const repo = core.getInput('repo');

        const octokit = github.getOctokit(myToken);
       
        // const { data: migration } = await octokit.rest.repos.delete({
        const  { status, data } = await octokit.rest.repos.delete({
          owner,
          repo
        });
    
        console.log(status);
        console.log(data);
        // console.log(migration);
        // const output = migration.status;
        // const output = 'test';
        core.setOutput('status', status);
        return status;
    }
    catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

run();