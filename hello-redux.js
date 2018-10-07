const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
	result: 0,
	screen: 0,
	history: 0
};

const reducer = (state = intialState, action) => {
	switch(action.type){
		case 'ADD_NUMBER':
			let screen = state.screen + action.value;
			return { ...state, screen };
			break;
	}
	return state;
};


// store
const store = createStore(reducer);

// subscribtions
store.subscribe(() => {
	console.log(store.getState());
});

// dispatch some stuff
store.dispatch({type: 'ADD_NUMBER', value: 2});