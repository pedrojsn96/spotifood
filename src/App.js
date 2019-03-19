import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './Store';

import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<Provider store={Store}>
				<BrowserRouter>
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/home" component={Home} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
