import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./repos.css";

const RepoList = () => {
    const [commits, setCommits] = useState(null);

    const fetchRepos = async () => {
        try {
            const res = await axios.get("http://localhost:6969/github/user/repo/recent");
            setCommits(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    return (
        <div className='repo-main'>
            {commits && commits.map(commit => <div className='repo-element'>{ commit.name }</div>)}
        </div>
    );
};

export default RepoList;
