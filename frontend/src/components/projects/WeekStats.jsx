import React, { useState, useEffect } from 'react'
import axios from 'axios';

const WeekStats = ({ repos }) => {
    const [weeklyStats, setStats] = useState(null);

    const fetchRepos = async (repos) => {
        try {
            const commitsData = {};
            const promises = repos.map(async (repo) => {
                const name = repo.name;
                const res = await axios.get("http://localhost:6969/github/user/repo/commits/stats", {
                    params: { repo: name }
                });
                commitsData[name] = res.data;
            });
            await Promise.all(promises);
            setStats(commitsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRepos(repos);
    }, [repos]);

  return (
    <div>
      {JSON.stringify(weeklyStats)}
    </div>
  )
}

export default WeekStats
