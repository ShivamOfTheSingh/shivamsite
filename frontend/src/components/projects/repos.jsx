import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./repos.css";

const RepoList = () => {
    const [commits, setCommits] = useState(null);

    const fetchRepos = async () => {
        try {
            const res = await axios.get("http://localhost:6969/github/user/recentcommit");
            setCommits(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    return (
        <div>
            <p>lol</p>
            <div>
                {commits ? (
                    <p>{Object.keys(commits).length} commits</p>
                ) : (
                    <p>Loading commits...</p>
                )}
            </div>
        </div>
    );
};

export default RepoList;
