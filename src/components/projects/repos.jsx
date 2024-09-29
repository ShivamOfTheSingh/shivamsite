import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./repos.css";

const RepoList = () => {
    const [commits, setCommits] = useState(null);

    const fetchRepos = async () => {
        try {
            const res = await axios.get("http://ec2-3-84-6-238.compute-1.amazonaws.com:6969/github/user/repo/recent");
            setCommits(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    return (
        <div className='repo-main'>
            {commits && commits.map((commit, index) =>
                <a className='repo-element' href={commit.html_url} target="_blank" rel="noopener noreferrer" title="Click to see my repo!"
                    style={{
                        animation: "fadeIn 1s forwards",
                        animationDelay: `${index * 250}ms`,
                    }}>
                    <div className='header'>
                        <h3>{commit.name}</h3>
                        <div>{`Last Updated On: ${formatDate(commit.updated_at)}`}</div>
                    </div>
                    <div className='scroll-readme'>
                    {(() => {
                        const elements = [];
                        for (let i = 1; i <= 100; i++) {
                        elements.push(<div key={i}>Item {i}</div>);
                        }
                        return elements;
                    })()}
                    </div>
                </a>
            )}
            <a className='dummy' href='https://github.com/ShivamOfTheSingh?tab=repositories' target="_blank" rel="noopener noreferrer"
                style={{
                    animation: "fadeIn 1s forwards",
                    animationDelay: `1000ms`,
                }}>
                <div>I have many more repos, check it out here &#8594;</div>
            </a>
        </div>
    );
};

export default RepoList;
