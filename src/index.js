import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router,Link,Route,Switch } from 'react-router-dom';
import store from './store/index';
import App from './App';
import Login from './pages/login';

ReactDOM.render(
<Provider store={ store }>
  <Router>
    <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/" component={App}></Route>
    </Switch>
  </Router>
</Provider>,
document.getElementById('root'));
