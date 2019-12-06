import React from "react";
import qs from "qs";

const About = ({ location }) => {
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true
	});
	console.log(query);
	const showDetail = query.detail === "true";
	return (
		<div>
			<h1>소개</h1>
			<p>이 프로젝트는 리액트 라우터를 소개하는 프로젝트 입니다.</p>
			{showDetail && <p>detail 을 true로 하셨군요.</p>}
		</div>
	);
};

export default About;
