import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./recentcommit.css"

const RecentCommit = ({ repos, formatDate }) => {
    const [commits, setCommits] = useState(null);

    const fetchRepos = async (repos) => {
        try {
            const commitsData = {};
            const promises = repos.map(async (repo) => {
                const name = repo.name;
                const res = await axios.get("http://ec2-3-84-6-238.compute-1.amazonaws.com:6969/github/user/repo/commits", {
                    params: { repo: name }
                });
                commitsData[name] = res.data[0];
            });
            await Promise.all(promises);
            setCommits(commitsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRepos(repos);
    }, [repos]);

    const mostRecentCommits = () => {
        let max_index = 0;
        let l = Object.keys(repos).length;
        let max_date = new Date(commits[repos[max_index].name].commit.committer.date);

        for (let i = 0; i < l; i++) {
            let curr_date = new Date(commits[repos[i].name].commit.committer.date);
            if (curr_date > max_date) {
                max_date = curr_date;
                max_index = i;
            }
        }

        const formatLocalTime = (dateString) => {
            const date = new Date(dateString);
            const options = { month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString(undefined, options);
            const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return `${formattedDate} at ${formattedTime}`;
        };

        return (
            <a href={repos[max_index].html_url} target="_blank" rel="noopener noreferrer" title={repos[max_index].name + " ~ My Most Recent Repository"}>
                <div className='main-commit'>
                    <div className='a'>My latest commit ~</div>
                    <h2>
                        {commits[repos[max_index].name].commit.message.length > 30
                            ? `"${commits[repos[max_index].name].commit.message.substring(0, 30)}..."`
                            : `"${commits[repos[max_index].name].commit.message}"`}
                    </h2>
                    <p>{formatLocalTime(commits[repos[max_index].name].commit.committer.date)}</p>
                </div>
            </a>
        );
    };

    return (
        <div>
            {!commits ? (<></>) : mostRecentCommits()}
        </div>
    );
}

export default RecentCommit;
