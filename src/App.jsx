import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import { Home, NavBar, Projects, Contacts } from "./components";

function App() {
	return (
		<>
		<main>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} className='HomePage'/>
				<Route path='/projects' element={<Projects />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
		</main>
		</>
	)
}

export default App
