import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
		<>
			<p1>Hiiii</p1>
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<Link to='/contacts'>Contacts</Link>
				</li>
			</ul>
		</nav>
		</>
  )
}

export default NavBar