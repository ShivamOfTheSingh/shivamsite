import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";
import GitProfile from "./GitProfile";
import ArrowGrid from "./ArrowGrid";
import RecentCommit from "./RecentCommit";
import History from "./History";
import RepoList from "./repos"

const Projects = ({ theme }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [allRepos, setRepos] = useState(null);

  useEffect(() => {
    const fetchGitData = async (data, setVar) => {
      try {
        const url = `http://localhost:6969/github/${data}`;
        const res = await axios.get(url);
        setVar(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGitData("user", setUserInfo);
    fetchGitData("user/repo", setRepos);
  }, []);

  const formatDate = (dateFromApi) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const year = dateFromApi.slice(0, 4);
    const month = months[parseInt(dateFromApi.slice(5, 7)) - 1];
    const day = dateFromApi.slice(8, 10);
    const time = dateFromApi.slice(11, 16);

    return `${month} ${day}, ${year} at ${time}`;
  };

  const playMeowSound = () => {
    const audio = new Audio("./sounds/meow.mp3");
    audio.play();
  };

  return (
    <div className="projects-main">
      <div className="lol">
        {!userInfo && !allRepos ? (
          <></>
        ) : (
          <div className="git-grid">
            {userInfo && <GitProfile userInfo={userInfo} formatDate={formatDate} />}
              {allRepos && <RecentCommit repos={allRepos} formatDate={formatDate} />}
              <RepoList />
            <div className="gitimg">
              {theme === "dark" ? (
                <img
                  src="./icons/githublight.svg"
                  className="giticon fadein"
                  title="meow meow"
                  onClick={playMeowSound}
                  alt="GitHub Light Icon"
                />
              ) : (
                <img
                  src="./icons/githubdark.svg"
                  className="giticon fadein"
                  title="meow"
                  onClick={playMeowSound}
                  alt="GitHub Dark Icon"
                />
              )}
            </div>
            {allRepos && <History repo={allRepos} />}
          </div>
        )}
      </div>
      <div className="p5-backgroud">
        <ArrowGrid />
      </div>
    </div>
  );
};

export default Projects;
