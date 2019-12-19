import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
	getPost,
	getUsers,
	post,
	users,
	loadingPost,
	loadingUsers
}) => {
	useEffect(() => {
		getPost(1);
		getUsers();
	}, [getPost, getUsers]);

	return (
		<Sample
			post={post}
			users={users}
			loadingPost={loadingPost}
			loadingUsers={loadingUsers}
		/>
	);
};

export default connect(
	state => ({
		post: state.post,
		users: state.users
	}),
	{
		getPost,
		getUsers
	}
)(SampleContainer);
