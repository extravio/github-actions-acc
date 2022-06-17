import * as core from '@actions/core';
import apiClient from './api-client.js';

export default async function run() {
    try {
        // get imput
        const token = core.getInput('repo_token');

        const  { status, data } = await apiClient.request(
            token, 
            <category>, 
            <method>, 
            {
              <payload>
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