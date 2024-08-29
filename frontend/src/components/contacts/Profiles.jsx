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
      
    }

    fetchGitData()
  }, [])

  return (
    <div className='ProfileMain'>
      {gituserinfo ? (
        <>
          <ProfileCell imagelink={gituserinfo.avatar_url} username={gituserinfo.login} cat={"GitHub"}/>
          <ProfileCell />
          <ProfileCell />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profiles;
