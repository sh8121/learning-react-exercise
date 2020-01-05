import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import TestComp from "./components/TestComp";

const App = () => {
	const testComp = <TestComp />;
	return (
		<>
			<Route path="/:category?" component={NewsPage} />
			{/* {testComp} */}
		</>
	);
};

export default App;
