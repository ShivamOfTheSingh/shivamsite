import React from "react";

import "./Navbar.css"
import LightModeButton from "./LightModeButton";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
		<>
		<nav className="NavBarMain">
			<LightModeButton />
			<div className="left-side">
				<Link to='/' className="navbar-element">Home</Link>
				<Link to='/projects' className="navbar-element">Projects</Link>
				<Link to='/contacts' className="navbar-element">Contacts</Link>
				<Link to='/me' className="navbar-element">About Me</Link>
			</div>
		</nav>
		</>
  )
}

export default NavBar