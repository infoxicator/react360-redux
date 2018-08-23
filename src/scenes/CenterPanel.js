import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ModelView from '../components/ModelView';
import { store } from '../store/store';

export default class LeftPanel extends Component {
    render() {
        return (
            <Provider store={store}>
            <ModelView />
            </Provider>
        );
    }
}
