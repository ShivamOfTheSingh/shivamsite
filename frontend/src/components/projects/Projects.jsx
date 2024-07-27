import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";
import GitProfile from "./GitProfile";
import ArrowGrid from "./ArrowGrid";
import RecentCommit from "./RecentCommit";

const Projects = (props) => {
	const [userInfo, setUserInfo] = useState(null);
	const [allRepos, setRepos] = useState(null);

	const fetchGitData = async (data, setVar) => {
		try {
			const url = "http://localhost:6969/github/" + data;
			const res = await axios.get(url);
			setVar(res.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
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

	return (
		<div className="projects-main">
			<div className="lol">
			{(!userInfo && !allRepos) ? (
				<></>
			) : (
					<div className="git-grid">
						<GitProfile userInfo={userInfo} formatDate={formatDate} />
						<RecentCommit repos={allRepos} formatDate={formatDate}/>
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
