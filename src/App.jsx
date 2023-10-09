import { Routes, Route } from "react-router-dom"

import "./App.css";
import { Home, NavBar, Projects, Contacts, AboutMe } from "./components";

function App() {
	return (
		<>
		<main>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/me' element={<AboutMe />} />
			</Routes>
		</main>
		</>
	)
}

export default App
