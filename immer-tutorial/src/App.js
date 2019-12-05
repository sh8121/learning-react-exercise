import React, { useState, useCallback, useRef } from "react";
import produce from "immer";

const App = () => {
	const nextId = useRef(1);
	const [form, setForm] = useState({ username: "", name: "" });
	const [data, setData] = useState({
		array: [],
		uselessValue: null
	});

	const onChange = useCallback(e => {
		const { name, value } = e.target;
		setForm(
			produce(draft => {
				draft[name] = value;
			})
		);
	}, []);

	const onSubmit = useCallback(
		e => {
			e.preventDefault();
			const info = {
				id: nextId.current,
				name: form.name,
				username: form.username
			};
			nextId.current++;
			setData(
				produce(draft => {
					draft.array.push(info);
				})
			);
			setForm({
				username: "",
				name: ""
			});
		},
		[form]
	);

	const onRemove = useCallback(id => {
		setData(
			produce(draft => {
				draft.array.splice(
					draft.array.findIndex(t => t.id === id),
					1
				);
			})
		);
	}, []);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					name="username"
					placeholder="아이디"
					onChange={onChange}
					value={form.username}
				/>
				<input
					name="name"
					placeholder="이름"
					onChange={onChange}
					value={form.name}
				/>
				<button type="submit">등록</button>
			</form>
			<div>
				<ul>
					{data.array.map(info => (
						<li key={info.id} onClick={() => onRemove(info.id)}>
							{info.username}({info.name})
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
