import { Octokit } from "octokit";

const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });

export const fetchGithubData = async () => {
    try {
        const response = await octokit.request('GET /user', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return null;
    }
};
