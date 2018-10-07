// import action types
import * as actionTypes from './actions';

const intialState = {
	result: 0,
	screen: 0,
	action: '',
	history: ''
};

const reducer = (state = intialState, action) => {
	let screen, result, history;
	switch(action.type){
		case actionTypes.ADD_NUMBER:
			screen = (state.screen > 0 && state.screen !== state.result ?state.screen.toString() : '') + action.value.toString();
			return { ...state, screen };

		case actionTypes.PLUS:
			result = calc(state.result,+state.screen,state.action);
			history = ' + '+ state.screen + state.history;
			return { ...state, result, screen: result, history, action: action.type };

		case actionTypes.MINUS:
			result = calc(state.result,+state.screen,state.action);
			history = ' - '+ state.screen + state.history;
			return { ...state, result, screen: result, history, action: action.type };

		case actionTypes.DIVIDE:
			result = calc(state.result,+state.screen,state.action);
			history = ' / '+ state.screen + state.history;
			return { ...state, result, screen: result, history, action: action.type };

		case actionTypes.MULTIPLY:
			result = calc(state.result,+state.screen,state.action);
			history = ' x '+ state.screen + state.history;
			return { ...state, result, screen: result, history, action: action.type };

		case actionTypes.MOD:
			result = calc(state.result,+state.screen,state.action);
			history = ' % '+ state.screen + state.history;
			return { ...state, result, screen: result, history, action: action.type };

		case actionTypes.EQUAL:
			result = calc(state.result,+state.screen,state.action);
			history = ' '+ state.screen + state.history;
			return { ...state, result, screen: result, history, action: '' };

		case actionTypes.NEGATIVE:
			result = -state.screen;
			return { ...state, screen: result };

		case actionTypes.CLEAR:
			return intialState;

		default: return state;
	}
};

const calc = (old,num,action) => {
	let result = old;

	switch(action){
		case actionTypes.PLUS:
			result = old + num;
			return result;

		case actionTypes.MINUS:
			result = old - num;
			return result;

		case actionTypes.MULTIPLY:
			result = old * num;
			return result;

		case actionTypes.DIVIDE:
			result = old / num;
			return result;

		case actionTypes.MOD:
			result = old % num;
			return result;

		default: return num;
	}
}

export default reducer;