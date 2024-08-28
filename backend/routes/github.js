require('dotenv').config();
const express = require('express');
const router = express.Router();
const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');

router.get('/user', async (req, res) => {
    try {
        const { Octokit } = await import('@octokit/rest');
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });
        const { data } = await octokit.request('GET /user', {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("Sending user data");
        res.json(data);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

router.get('/user/repo', async (req, res) => {
    try {
        const { Octokit } = await import('@octokit/rest');
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });
        const { data } = await octokit.request('GET /users/{username}/repos', {
            username: 'shivamofthesingh',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("Sending repo data");
        res.json(data);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

router.get('/user/repo/commits', async (req, res) => {
    try {
        const { Octokit } = await import('@octokit/rest');
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });

        const { repo } = req.query;

        const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: 'shivamofthesingh',
            repo: repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("Sending commit data for repo: " + repo);
        res.json(data);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

router.get('/user/repo/commits/stats/oat', async (req, res) => {
    try {
        const { Octokit } = await import('@octokit/rest');
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });

        const { repo } = req.query;

        const { data } = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
            owner: 'shivamofthesingh',
            repo: repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        console.log("Sending user commit data lol for repo: " + repo);
        res.json(data);
    } catch (error) {
        console.log("fudge");
    }
});

dayjs.extend(isoWeek);

router.get('/user/repo/commits/stats/week', async (req, res) => {
    try {
        const { Octokit } = await import('@octokit/rest');
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });

        const { repo } = req.query;

        const lastMonday = dayjs().isoWeekday(1).startOf('day');
        const nextSunday = lastMonday.add(6, 'day').endOf('day');
        const since = lastMonday.toISOString();
        const until = nextSunday.toISOString();

        const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: 'shivamofthesingh',
            repo: repo,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            },
            since: since,
            until: until
        });
        console.log("Sending WEEKLY commit data lol for repo: " + repo);
        res.json(data);
    } catch (error) {
        console.error("Error fetching commit data: ", error);
        res.status(500).json({ error: 'An error occurred while fetching commit data' });
    }
});

module.exports = router;
