import React from "react";

import "./Navbar.css"
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
		<>
		<nav className="NavBarMain">
			<Link to='/' className="navbar-element">Home</Link>
			<Link to='/projects' className="navbar-element">Projects</Link>
			<Link to='/contacts' className="navbar-element">Contacts</Link>
		</nav>
		</>
  )
}

export default NavBar