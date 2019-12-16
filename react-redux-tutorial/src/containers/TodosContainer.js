import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
	input,
	todos,
	onChangeInput,
	onInsert,
	onToggle,
	onRemove
}) => {
	return (
		<Todos
			input={input}
			todos={todos}
			onChangeInput={onChangeInput}
			onInsert={onInsert}
			onToggle={onToggle}
			onRemove={onRemove}
		/>
	);
};

export default connect(
	({ todos }) => ({
		input: todos.input,
		todos: todos.todos
	}),
	{
		onChangeInput: changeInput,
		onInsert: insert,
		onToggle: toggle,
		onRemove: remove
	}
)(TodosContainer);
