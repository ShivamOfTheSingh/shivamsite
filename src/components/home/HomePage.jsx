import React from "react";
import Valley from "./Valley";
import "./HomePage.css";

const Home = () => {
	return (
		<>
		<div className="HomePageMain">
			<div className="welcome-text">
				Hello! My name is Shivam and this is my website.
			</div>
			<Valley />	
		</div>
		</>
	)
}

export default Home