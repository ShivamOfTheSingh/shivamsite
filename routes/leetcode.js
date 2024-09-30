const express = require('express');
const router = express.Router();
const leetcode = require("leetcode-query")

router.get('/user', async (req, res) => {
    try {
        const leet = new leetcode.LeetCode()
        const response = await leet.user("Shivam_Of_The_Singh")
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
