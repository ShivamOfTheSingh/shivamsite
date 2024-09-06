require('dotenv').config();
const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');
dayjs.extend(isoWeek);

// Utility function to initialize Octokit
const initializeOctokit = async () => {
    const { Octokit } = await import('@octokit/rest');
    return new Octokit({ auth: process.env.GITHUB_TOKEN });
};

// Route to fetch the authenticated user
router.get('/user', async (req, res) => {
    try {
        const octokit = await initializeOctokit();
        const { data } = await octokit.request('GET /user', {
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        });
        console.log("Sending user data");
        res.json(data);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// Route to fetch repositories of a specific user
router.get('/user/repo', async (req, res) => {
    try {
        const octokit = await initializeOctokit();
        const { data } = await octokit.request('GET /users/{username}/repos', {
            username: 'shivamofthesingh',
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        });
        console.log("Sending repo data");
        res.json(data);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// Route to fetch commits of a specific repository
router.get('/user/repo/commits', async (req, res) => {
    try {
        const octokit = await initializeOctokit();
        const { repo } = req.query;
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: 'shivamofthesingh',
            repo: repo,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        });
        console.log(`Sending commit data for repo: ${repo}`);
        res.json(data);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

const fetchOATDataWithRetry = async (octokit, repo, retries = 5, delay = 250) => {
    for (let i = 0; i < retries; i++) {
        const { data, status } = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
            owner: 'shivamofthesingh',
            repo: repo,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        });
        if (status === 200 && data.length > 0) {
            return data;
        }
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    return [];
};

router.get('/user/repo/commits/stats/oat', async (req, res) => {
    try {
        const octokit = await initializeOctokit();
        const { repo } = req.query;
        const data = await fetchOATDataWithRetry(octokit, repo);
        console.log(`Sending OAT commit data for repo: ${repo}`);
        res.json(data);
    } catch (error) {
        console.error("Error fetching OAT data: ", error);
        res.status(500).json({ error: 'An error occurred while fetching OAT data' });
    }
});

// Route to fetch weekly commit statistics for a specific repository
router.get('/user/repo/commits/stats/week', async (req, res) => {
    try {
        const octokit = await initializeOctokit();
        const { repo } = req.query;

        const lastMonday = dayjs().isoWeekday(1).startOf('day');
        const nextSunday = lastMonday.add(6, 'day').endOf('day');
        const since = lastMonday.toISOString();
        const until = nextSunday.toISOString();

        const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: 'shivamofthesingh',
            repo: repo,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' },
            since: since,
            until: until
        });
        console.log(`Sending weekly commit data for repo: ${repo}`);
        res.json(data);
    } catch (error) {
        console.error("Error fetching weekly commit data: ", error);
        res.status(500).json({ error: 'An error occurred while fetching weekly commit data' });
    }
});

// Route to fetch yearly participation statistics for a specific repository
router.get('/user/repo/commits/stats/year', async (req, res) => {
    try {
        const octokit = await initializeOctokit();
        const { repo } = req.query;

        const { data } = await octokit.request('GET /repos/{owner}/{repo}/stats/participation', {
            owner: 'shivamofthesingh',
            repo: repo,
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
        });
        console.log(`Sending yearly commit data for repo: ${repo}`);
        res.json(data);
    } catch (error) {
        console.error("Error fetching yearly commit data: ", error);
        res.status(500).json({ error: 'An error occurred while fetching yearly commit data' });
    }
})

module.exports = router;