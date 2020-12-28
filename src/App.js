import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import AllUsers from "./Component/AllUsers/AllUsers";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import NotFound from "./Component/NotFound/NotFound";
import UserDetail from "./Component/UserDetail/UserDetail";
function App() {
	return (
		<div className="">
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<AllUsers></AllUsers>
					</Route>
					<Route path="/users">
						<AllUsers></AllUsers>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/contact">
						<Contact></Contact>
					</Route>
					<Route path="/user/:userId">
						<UserDetail></UserDetail>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
