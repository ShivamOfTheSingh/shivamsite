import React, { useState, useEffect } from 'react';
import ProfileCell from './ProfileCell';
import axios from "axios"
import "./Profiles.css";

const Profiles = () => {
  const [gituserinfo, setGitUserinfo] = useState(null);
  const [linkedinuserinfo, setLinked] = useState(null);

  useEffect(() => {
    const fetchGitData = async () => {
      try {
        const user = await axios.get('http://localhost:6969/github/user')
        setGitUserinfo(user.data)
      } catch (error) {
        console.error(error)
      }
    }

    const fetLinkedIn = async () => {
      try {
        const user = await axios.get('http://localhost:6969/linkedin/user')
        setLinked(user.data)
        console.log(user.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchGitData()
    fetLinkedIn()
  }, [])

  return (
    <div className='ProfileMain'>
      {gituserinfo && linkedinuserinfo && (
        <>
          <ProfileCell imagelink={gituserinfo.avatar_url} username={gituserinfo.login} cat={"GitHub"} url={gituserinfo.html_url}/>
          <ProfileCell imagelink={linkedinuserinfo.picture} username={linkedinuserinfo.name} cat={"LinkedIn"} url={"https://www.linkedin.com/in/shivamofthesingh/"}/>
          <ProfileCell />
        </>
      )}
    </div>
  );
}

export default Profiles;
