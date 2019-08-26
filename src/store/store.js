import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default initialState => {
    const middleware = [thunk];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));
    // store.subscribe(() => {
    //     const state = store.getState();
    //     console.log(state);
    // })
    return store
}
