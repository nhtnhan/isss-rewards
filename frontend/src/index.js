import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducer/index';

import * as serviceWorker from './serviceWorker';

import App from './App';
import HomePage from './pages/HomePage';
import Splash from './pages/Splash';

import { loadState, saveState } from './localStorage';

// const persistdState = loadState();
// const store = createStore(
//   rootReducer,
//   persistdState,
//   applyMiddleware(thunk)
// );
// store.subscribe(()=>{
//   saveState(store.getState());
// })

ReactDOM.render((
    <Router >
      <Switch>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/splash" component={Splash}/>
      </Switch>
    </Router>
),document.getElementById('root'));

serviceWorker.unregister();

