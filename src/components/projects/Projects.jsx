import React, { useState, useEffect } from "react";
import "./Projects.css";
import { fetchGithubData } from "../global/gitapi";

const Projects = (props) => {
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

	const formatData = (datefromapi) => {
		let year = datefromapi.slice(0, 4);
		let month = datefromapi.slice(5, 7);
		let day = datefromapi.slice(8, 10);
		let time = datefromapi.slice(11, 16);

		switch (month) {
			case '01': month = 'January'; break;
			case '02': month = 'February'; break;
			case '03': month = 'March'; break;
			case '04': month = 'April'; break;
			case '05': month = 'May'; break;
			case '06': month = 'June'; break;
			case '07': month = 'July'; break;
			case '08': month = 'August'; break;
			case '09': month = 'September'; break;
			case '10': month = 'October'; break;
			case '11': month = 'November'; break;
			case '12': month = 'December'; break;
			default: break;
		}

		return `${month} ${day}, ${year} at ${time}`;
	};

	return (
		<div className="ProjectsMain">
			<div className="gitprofile">
				{userinfo ? (
					<>
						<img className="pfp" src={userinfo.avatar_url} alt="Profile" />
						<div className="text">
							<h1>{userinfo.login}</h1>
							<p>{userinfo.bio}</p>
							<ul>
								<li>Started on {formatData(userinfo.created_at)}</li>
								<li>Followers {userinfo.followers} - Following {userinfo.following}</li>
								<li>Number of repos: {userinfo.public_repos}</li>
							</ul>
							<a href={userinfo.html_url} target="_blank" rel="noopener noreferrer">Check it out!</a>
						</div>
					</>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default Projects;
