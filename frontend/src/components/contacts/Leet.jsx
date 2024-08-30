import React, { useEffect, useState } from "react";
import axios from "axios"
import "./leet.css"

const Leet = () => {
    const [leetdata, setLeet] = useState(null)
    useEffect(() => {
        const fetchleet = async () => {
            try {
                const response = await axios.get("http://localhost:6969/leet/user")
                setLeet(response.data)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        }

        fetchleet()
    }, [])

    return (
        <>
            {
                leetdata &&
                <a className="leetmain" title={"My Leetcode Profile"} href={"https://leetcode.com/u/Shivam_Of_The_Singh/"} target="_blank" rel="noopener noreferrer">
                    <div>My Leetcode Profile</div>
                    <div className="bottomside">
                        <div className="leftside">
                            <img src={leetdata.matchedUser.profile.userAvatar} />
                            <div className="usernom">{leetdata.matchedUser.username}</div>
                            <div>Rank: {leetdata.matchedUser.profile.ranking}</div>
                        </div>
                        <div className="middleside">
                            lol
                        </div>
                        <div className="rightside">
                            <ul>
                                <li>Total: {leetdata.matchedUser.submitStats.acSubmissionNum[0].count}</li>
                                <li>Easy: {leetdata.matchedUser.submitStats.acSubmissionNum[1].count}</li>
                                <li>Medium: {leetdata.matchedUser.submitStats.acSubmissionNum[2].count}</li>
                                <li>Hard: {leetdata.matchedUser.submitStats.acSubmissionNum[3].count}</li>
                            </ul>
                        </div>
                    </div>
                </a>
            }
        </>
    )
}

export default Leet