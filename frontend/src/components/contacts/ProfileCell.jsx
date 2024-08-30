import React from 'react';
import "./Cell.css";

const ProfileCell = ({ imagelink, username, cat, url }) => {
  return (
    <div className='CellMain' title={`My ${cat} profile - ${username}`}>
      <img className='pfp' src={imagelink} alt="Profile" />
      <div className='text'>
        <p>Come check out my {cat}!</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{username} &#8594;</a>
      </div>
    </div>
  );
}

export default ProfileCell;
