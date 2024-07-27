import React, { useState, useEffect } from 'react';
import ProfileCell from './ProfileCell';
import "./Profiles.css";

const Profiles = () => {
  const [gituserinfo, setGitUserinfo] = useState(null);
  const [linkedinuserinfo, setLinked] = useState(null);

  return (
    <div className='ProfileMain'>
      {gituserinfo ? (
        <>
          <ProfileCell />
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
