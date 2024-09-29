import React from 'react'
import "./pfp.css"

const GitProfile = ({ userInfo, formatDate }) => {
  return (
    <a href={userInfo.html_url} title={`${userInfo.login} - My Github`} target="_blank" rel="noopener noreferrer">
      <div className="profile-main">
        <img className="profile-picture" src={userInfo.avatar_url} alt="Profile" />
        <div className="profile-text">
          <h1>{userInfo.login}</h1>
          <p>{userInfo.bio}</p>
          <ul>
            <li>Started on {formatDate(userInfo.created_at)}</li>
            <li>Followers {userInfo.followers} - Following {userInfo.following}</li>
            <li>Number of repos: {userInfo.public_repos}</li>
          </ul>
          <a href={userInfo.html_url} title={`${userInfo.login} - My Github`} target="_blank" rel="noopener noreferrer">Check it out!</a>
        </div>
      </div>
    </a>
  );
}

export default GitProfile;
