import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Homepage from './pages/HomePage';
import App from './App';
import Splash from './pages/Splash';
import HelpPage from './pages/HelpPage';
import createStore from "./store/createStore";
import history from './common/history';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/home/user/:userId" component={Homepage} /> */}
        <Route path="/home" component={Homepage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/splash" component={Splash} />
      </Switch> 
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

