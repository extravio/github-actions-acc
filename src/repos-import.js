import * as core from '@actions/core';
import apiClient from './api-client.js';

export default async function run() {
    try {
        const token = core.getInput('repo_token');
        // github repo
        const owner = core.getInput('owner');
        const repo = core.getInput('repo');
        // ado repo
        const vcs_url = core.getInput('ado_repo');
        const vcs = 'git'
        const vcs_username	= core.getInput('ado_user');
        const vcs_password = core.getInput('ado_pat');

        // start import
        const  { status, data } = await apiClient.request(
          token, 
          'migrations', 
          'startImport', 
          {
            owner,
            repo,
            vcs_url,
            vcs,
            vcs_username,
            vcs_password
          }
      );
        
      core.setOutput('status', 'ok');
      return { status, data };
    }
    catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

run();