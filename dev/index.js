import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createReducers from './reducers';
import Routes from './Routes'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.min.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/css/styles.scss';

injectTapEventPlugin();

export const store = createStore(
    createReducers(),
    compose(
        applyMiddleware(
            routerMiddleware(browserHistory)

        ),
	    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ) 
);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Routes history={syncHistoryWithStore(browserHistory, store)}/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
