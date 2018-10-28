import { combineReducers, createStore } from 'redux';

function createReducer (reducers) {
    return combineReducers({
        root: (state = null) => state,
        ...reducers
    });
}

function updateReducer(name, nextReducer) {
    this.asyncReducers[name] = nextReducer;
    this.replaceReducer(createReducer(this.asyncReducers));
};

export default (() => {
    const store = createStore(createReducer());

    store.asyncReducers = {};
    store.update = updateReducer;

    return store;
})();




