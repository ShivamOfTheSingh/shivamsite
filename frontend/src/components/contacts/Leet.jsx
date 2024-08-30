import React, { useEffect, useState } from "react";
import axios from "axios"
import "./leet.css"

const Leet = () => {
    const [leetdata, setLeet] = useState(null)
    useEffect(() => {
        const fetchleet = async() => {
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
                        <div className="usernom">{leetdata.matchedUser.username}</div>
                        <img src={leetdata.matchedUser.profile.userAvatar} />
                        <div>Rank: {leetdata.matchedUser.profile.ranking}</div>
                    </div>
                    <div className="middleside">
                        lol
                    </div>
                    <div className="rightside">
                        rightside
                    </div>
                </div>
            </a>
        }
        </>
    )
}

export default Leet