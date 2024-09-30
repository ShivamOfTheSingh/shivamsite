require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/user', async (req, res) => {
    try {
        const token = process.env.LINKEDIN_TOKEN;
        const response = await axios.get('https://api.linkedin.com/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
