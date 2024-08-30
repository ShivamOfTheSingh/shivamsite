import React, { useState, useEffect } from 'react';
import ProfileCell from './ProfileCell';
import axios from "axios"
import "./Profiles.css";
import Leet from './Leet';

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
      } catch (error) {
        console.error(error)
      }
    }

    fetchGitData()
    fetLinkedIn()
  }, [])

  return (
    <div className='ProfileMain'>
      { gituserinfo && linkedinuserinfo &&
      <div className='profiles'>
        <ProfileCell url={gituserinfo.html_url} cat={"Github"} imagelink={gituserinfo.avatar_url} username={gituserinfo.login}/>
        <ProfileCell url={"https://www.linkedin.com/in/shivamofthesingh/"} cat={"Linkedin"} imagelink={linkedinuserinfo.picture} username={"ShivamOfTheSingh"}/>
      </div>
      }
      <Leet />
    </div>
  );
}

export default Profiles;
