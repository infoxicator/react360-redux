import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TopPosts from '../components/TopPosts';
import { store } from '../store/store';

export default class LeftPanel extends Component {
    render() {
        return (
            <Provider store={store}>
            <TopPosts />
            </Provider>
        );
    }
}
