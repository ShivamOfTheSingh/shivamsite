require('dotenv').config();
const express = require('express');
const router = express.Router();

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
        res.json(data);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

module.exports = router;
