import * as core from '@actions/core';
import * as github from '@actions/github';

export default async function run() {
    try {
        const myToken = core.getInput('repo_token');
        // github repo
        const owner = core.getInput('owner');
        const repo = core.getInput('repo');

        const octokit = github.getOctokit(myToken);
       
        const { data: migration } = await octokit.rest.migrations.getImportStatus({
          owner,
          repo
        });
    
        console.log(migration);
        const output = migration.status;
        core.setOutput('status', output);
        return output;
    }
    catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

run();