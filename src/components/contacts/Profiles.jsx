import React, { useState, useEffect } from 'react';
import { fetchGithubData } from '../global/gitapi';
import ProfileCell from './ProfileCell';
import "./Profiles.css";

const Profiles = () => {
  const [userinfo, setUserinfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("Waiting on response from GitHub");
      const data = await fetchGithubData();
      console.log("Received response");
      setUserinfo(data);
    };
    fetchUserData();
  }, []);

  return (
    <div className='ProfileMain'>
      {userinfo ? (
        <>
          <ProfileCell imagelink={userinfo.avatar_url} cat={'GitHub'} username={userinfo.html_url}/>
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
