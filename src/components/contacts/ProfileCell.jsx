import React from 'react';
import "./Cell.css";

const ProfileCell = ({ imagelink, username, cat, url }) => {
  return (
    <a className='CellMain' title={`My ${cat} profile - ${username}`} href={url} target="_blank" rel="noopener noreferrer">
      <img className='pfp' src={imagelink} alt="Profile" />
      <div className='text'>
        <p>Come check out my {cat}!</p>
        <div className='a'>{username} &#8594;</div>
      </div>
    </a>
  );
}

export default ProfileCell;
