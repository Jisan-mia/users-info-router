import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				<div className="container">
					<NavLink className="navbar-brand" to="/">
						User-Info
					</NavLink>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item ">
								<NavLink
									exact
									activeClassName="selected"
									className="nav-link"
									to="/users"
								>
									User <span className="sr-only">(current)</span>
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									activeClassName="selected"
									exact
									className="nav-link"
									to="/about"
								>
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									activeClassName="selected"
									exact
									className="nav-link"
									to="/contact"
								>
									Contact
								</NavLink>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button
								className="btn btn-outline-success my-2 my-sm-0"
								type="submit"
							>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
