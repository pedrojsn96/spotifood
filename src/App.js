import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './Store';

import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/Test';

class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<Provider store={Store}>
				<BrowserRouter>
					<Switch>
						{/* <Redirect path="/auth" to="/home" component={Home} /> */}
						<Redirect path="/auth" to="/list" />
						<Route path="/" exact component={Login} />
						<Route path="/home" component={Home} />
						<Route path="/list" component={Test} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
