import React, { useEffect, useState } from "react";
import axios from "axios";
import "./leet.css";

const Leet = () => {
    const [leetdata, setLeet] = useState(null);

    useEffect(() => {
        const fetchleet = async () => {
            try {
                const response = await axios.get("http://localhost:6969/leet/user");
                setLeet(response.data);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchleet();
    }, []);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <>
            {leetdata && (
                <a
                    className="leetmain"
                    title="My Leetcode Profile"
                    href="https://leetcode.com/u/Shivam_Of_The_Singh/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div>My Leetcode Profile</div>
                    <div className="bottomside">
                        <div className="leftside">
                            <div className="usernom">{leetdata.matchedUser.username}</div>
                            <img src={leetdata.matchedUser.profile.userAvatar} alt="User Avatar" />
                            <div>Rank: {leetdata.matchedUser.profile.ranking}</div>
                        </div>
                        <div className="middleside">
                            <div>I have completed a total of <div className="num">{leetdata.matchedUser.submitStats.acSubmissionNum[0].count} problems</div></div>
                            <div className="barchart">
                                <div className="bar">
                                    <div className="bardata" style={{
                                        width: `${(leetdata.matchedUser.submitStats.acSubmissionNum[1].count / leetdata.allQuestionsCount[1].count) * 100}%`,
                                        backgroundColor: "green"
                                    }}>Easy</div>
                                    <div className="frac">{leetdata.matchedUser.submitStats.acSubmissionNum[1].count} / {leetdata.allQuestionsCount[1].count}</div>
                                </div>
                                <div className="bar">
                                    <div className="bardata" style={{
                                        width: `${(leetdata.matchedUser.submitStats.acSubmissionNum[2].count / leetdata.allQuestionsCount[2].count) * 100}%`,
                                        backgroundColor: "gold"
                                    }}>Medium</div>
                                    <div className="frac">{leetdata.matchedUser.submitStats.acSubmissionNum[2].count} / {leetdata.allQuestionsCount[2].count}</div>
                                </div>
                                <div className="bar">
                                    <div className="bardata" style={{
                                        width: `${(leetdata.matchedUser.submitStats.acSubmissionNum[3].count / leetdata.allQuestionsCount[3].count) * 100}%`,
                                        backgroundColor: "crimson"
                                    }}>Hard</div>
                                    <div className="frac">{leetdata.matchedUser.submitStats.acSubmissionNum[3].count} / {leetdata.allQuestionsCount[3].count}</div>
                                </div>
                            </div>
                        </div>
                        <div className="rightside">
                            <div>I last attempted: </div>
                            <div className="leet_title">{leetdata.recentSubmissionList[0].title}</div>
                            <div>{formatDate(leetdata.recentSubmissionList[0].timestamp)}</div>
                        </div>
                    </div>
                </a>
            )}
        </>
    );
};

export default Leet;
