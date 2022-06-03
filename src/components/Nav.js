import React from "react";
import logo from "../assets/images/logo-bg.png";
import Account from "./Account";
import classes from "../styles/Nav.module.css";

const Nav = () => {
	return (
		<nav class={classes.nav}>
			<ul>
				<li>
					<a href='index.html' class={classes.brand}>
						<img src={logo} alt='Learn with Sumit Logo' />
						<h3>Learn with Sumit</h3>
					</a>
				</li>
			</ul>
			<Account />
		</nav>
	);
};

export default Nav;