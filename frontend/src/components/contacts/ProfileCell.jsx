import React from 'react';
import "./Cell.css";

const ProfileCell = ({ imagelink, username, cat, url }) => {
  return (
    <div className='CellMain' title={`My ${cat} profile - ${username}`}>
      <img className='pfp' src={imagelink} alt="Profile" />
      <div className='text'>
        <h1>Come check out my {cat}!</h1>
        <a href={url} target="_blank" rel="noopener noreferrer">{username} &#8594;</a>
      </div>
    </div>
  );
}

export default ProfileCell;
