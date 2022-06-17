import * as core from '@actions/core';
import apiClient from './api-client.js';

export default async function run() {
    try {
        const token = core.getInput('repo_token');
        // github repo
        const owner = core.getInput('owner');
        const repo = core.getInput('repo');

        const  { status, data } = await apiClient.request(
            token, 
            'migrations', 
            'getImportStatus', 
            {
              owner,
              repo
            }
        );
        core.setOutput('status', data.status);
        return { status, data };
    }
    catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

run();