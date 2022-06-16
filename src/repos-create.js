import * as core from '@actions/core';
import apiClient from './api-client.js';

export default async function run() {
    try {
        const token = core.getInput('repo_token');
        const repo = core.getInput('repo');
        const  { status, data } = await apiClient.request(
            token, 
            'repos', 
            'createForAuthenticatedUser', 
            {
              name: repo
            }
        );
        core.setOutput('status', status);
        return { status, data };
    }
    catch (error) {
        core.setFailed(error.message);
        throw error;
    }
}

run();