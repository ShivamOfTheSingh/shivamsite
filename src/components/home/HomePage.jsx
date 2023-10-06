import React, { useEffect } from "react";
import Valley from "./Valley";
import "./HomePage.css";
import "./colors.css"

const Home = () => {
	useEffect(() => {
		// Check if the animation has already played by looking at localStorage
		const animationPlayed = localStorage.getItem("animationPlayed");

		if (!animationPlayed) {
			// Start the animation here (e.g., by adding a CSS class)
			// You might need to adjust this part based on your CSS animations
			const welcomeText = document.querySelector(".welcome-text");
			welcomeText.classList.add("animation-started");

			// Set a flag in localStorage to indicate that the animation has played
			localStorage.setItem("animationPlayed", "true");
		}
	}, []);

	return (
		<>
			<div className="HomePageMain">
				<div className="welcome-text">
					<p className="text-component">Hello! My name is&nbsp;
						<a className="text-component" href="mailto: shivam2003.singh@gmail.com" title="Email Me!">Shivam</a>&nbsp;and this is my website.</p>
				</div>
				<Valley />
			</div>
		</>
	)
}

export default Home;
