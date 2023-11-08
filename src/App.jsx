import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import { Home, NavBar, Projects, Contacts, AboutMe } from "./components";

import "./App.css";

function App() {
	const [theme, setTheme] = useState('dark')

	const toggleTheme = () => {
		startAnimation();
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';

			const root = document.documentElement;
			if (newTheme === 'dark') {
				root.style.setProperty('--main-bg-color', 'rgb(43, 43, 43)');
				root.style.setProperty('--dim-bg-color', 'rgb(38, 37, 37)');
				root.style.setProperty('--bright-bg-color', 'rgb(76, 74, 74)');
				root.style.setProperty('--main-text-color', 'rgb(193, 193, 156)');
				root.style.setProperty('--dim-text-color', 'rgb(152, 152, 104)');
				root.style.setProperty('--bright-text-color', 'rgb(126, 125, 125)');
			} else {
				root.style.setProperty('--main-text-color', 'rgb(43, 43, 43)');
				root.style.setProperty('--bright-text-color', 'rgb(38, 37, 37)');
				root.style.setProperty('--dim-text-color', 'rgb(110, 109, 109)');
				root.style.setProperty('--main-bg-color', 'rgb(193, 193, 156)');
				root.style.setProperty('--dim-bg-color', 'rgb(209, 209, 170)');
				root.style.setProperty('--bright-bg-color', 'rgb(126, 125, 125)');
			}

			return newTheme;
		});
	};


	
	const startAnimation = () => {
		const transitioner = document.querySelector('.transitioner');
		transitioner.classList.add('animate-cover');
		transitioner.addEventListener('animationend', () => {
			transitioner.classList.remove('animate-cover');
		});
	}

	return (
		<>
		<main>
			<NavBar toggleTheme={ toggleTheme }/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/me' element={<AboutMe />} />
			</Routes>
		</main>
		<div className="transitioner"></div>
		</>
	)
}

export default App
