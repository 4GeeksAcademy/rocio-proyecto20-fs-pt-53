import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Favorites } from "./Favorites";
import Dropdown from 'react-bootstrap/Dropdown';


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img className="logo" src="https://www.freepnglogos.com/uploads/star-wars-logo-3.png" />
			</Link>
			<div className="ml-auto me-4">
				<Favorites />
			</div>
		</nav>
	);
};
