import React, { useState, useEffect } from "react";
import "./Projects.css";

const Projects = (props) => {
	const [userInfo, setUserInfo] = useState(null);
	const [repoInfo, setRepoInfo] = useState(null);

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
			hello
		</div>
	);
};

export default Projects;
