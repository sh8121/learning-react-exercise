import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
	const activeStyle = {
		backgroundColor: "black",
		color: "white"
	};

	return (
		<div>
			<h3>사용자 목록</h3>
			<ul>
				<li>
					<NavLink to="/profiles/velopert" activeStyle={activeStyle}>
						velopert 프로필
					</NavLink>
				</li>
				<li>
					<NavLink to="/profiles/gildong" activeStyle={activeStyle}>
						gildong 프로필
					</NavLink>
				</li>
			</ul>
			<Route
				path="/profiles"
				exact
				render={() => <div>사용자를 선택해주세요.</div>}
			/>
			<Route path="/profiles/:username" component={Profile} />
		</div>
	);
};

export default Profiles;
