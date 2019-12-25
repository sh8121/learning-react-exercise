import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { GET_POST, GET_USERS, getPost, getUsers } from "../modules/sample";

const SampleContainer = ({
	getPost,
	getUsers,
	post,
	users,
	loadingPost,
	loadingUsers
}) => {
	useEffect(() => {
		const fn = async () => {
			try {
				await getPost(1);
				await getUsers();
			} catch (e) {
				console.log(e);
			}
		};
		fn();
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
	({ sample, loading }) => ({
		post: sample.post,
		users: sample.users,
		loadingPost: loading[GET_POST],
		loadingUsers: loading[GET_USERS]
	}),
	{
		getPost,
		getUsers
	}
)(SampleContainer);
