import React from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import UsersPage from "./pages/UsersPage";
import TestComp from "./components/TestComp";

const App = () => {
	const testComp = <TestComp />;
	return (
		<div>
			<Menu />
			<hr />
			<Route path="/red" component={RedPage} />
			<Route path="/blue" component={BluePage} />
			<Route path="/users" component={UsersPage} />
			{testComp}
		</div>
	);
};

export default App;
