import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CurrentPost from '../components/CurrentPost';
import { store } from '../store/store';


// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class LeftPanel extends Component {
    render() {
        return (
            <Provider store={store}>
            <CurrentPost />
            </Provider>
        );
    }
}
