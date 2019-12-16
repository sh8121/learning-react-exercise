import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch, useStore } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
	const number = useSelector(state => state.counter.number);
	const store = useStore();
	const dispatch = useDispatch();
	const onIncrease = useCallback(() => store.dispatch(increase()), [store]);
	const onDecrease = useCallback(() => store.dispatch(decrease()), [store]);
	return (
		<Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
	);
};

export default CounterContainer;

// function mapStateToProps(state) {
// 	return {
// 		number: state.counter.number
// 	};
// }

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(
// 		{
// 			onIncrease: increase,
// 			onDecrease: decrease
// 		},
// 		dispatch
// 	);
// }

// export default connect(mapStateToProps, {
// 	onIncrease: increase,
// 	onDecrease: decrease
// })(CounterContainer);
