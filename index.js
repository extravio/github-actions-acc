import * as core from '@actions/core';
import * as github from '@actions/github';

export default async function run() {
    try {
        const myToken = core.getInput('repo_token');
        // github repo
        const owner = core.getInput('owner');
        const repo = core.getInput('repo');
        // ado repo
        const vcs_url = core.getInput('ado_repo');
        const vcs = 'git'
        const vcs_username	= core.getInput('ado_user');
        const vcs_password = core.getInput('ado_pat');


        const payload = {
            owner,
            repo,
            vcs_url,
            vcs,
            vcs_username,
            vcs_password
          }
          console.log(payload);
        
        const octokit = github.getOctokit(myToken);
        // const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser();
        // start import
        const { data: migration } = await octokit.rest.migrations.startImport({
            owner,
            repo,
            vcs_url,
            vcs,
            vcs_username,
            vcs_password
          });

          // const { data: migration } = await octokit.rest.migrations.getImportStatus({
          //   owner,
          //   repo
          // });

        
        core.setOutput('status', 'ok');
        // console.log(migration);
        return migration;
    }
    catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

run();