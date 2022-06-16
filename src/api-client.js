import * as core from '@actions/core';
import * as github from '@actions/github';

const HttpClient = {
    // Define a common interface to handle different responses from the API
    // response(ok, error, data = null) {
    //   return { ok, error, data };
    // },

    /**
     * Execute an Octokit command. Format: octokit.rest.<category>.<method>(<payload>);
     * Example:
     *  octokit.rest.repos.delete({
     *     owner,
     *     repo,
     *  });
     * @param  {String} token       The Github token
     * @param  {String} category    The Github element (repos, migrations, etc.)
     * @param  {String} method      The name of the method (delete, createUsingTemplate, etc.)
     * @param  {Object} payload     The payload of the request
     * @return {Object} payload     The payload of the request
     */
    async request(token, category, method, payload) {
        try {
            const octokit = github.getOctokit(token);
                   
            const  { status, data } = await octokit.rest[category][method](payload);
            // console.log(status);
            // console.log(data);
            return { status, data };
        }
        catch (error) {
            core.setFailed(error.message);
            throw error;
        }
    }
    //   try {
    //     const response = await this.fetch(
    //       url,
    //       {
    //         method: 'GET',
    //         headers,
    //       },
    //     );
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok.');
    //     }
    //     const data = await response.json();
    //     return this.response(response.ok, null, data);
    //   } catch (error) {
    //     return this.response(false, error.message);
    //   }
    // },
    // separate this function to apply caching
    // async fetch(url, options) {
    //   return fetch(url, options);
    // }
};
  
export default HttpClient;