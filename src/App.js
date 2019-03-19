import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './Store';

import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
	componentDidMount() {}

	render() {
		//http://localhost:3000/#access_token=BQARMW3NhHCP7oV9CN7rPAyu6NWboweokV0J-xgfU68k0rDtZAmMZDK3ZnCkI02ftLkiKloRaNFBSnLvvRcO6fKIP5B_tIyytzk5xsQ-Z4Iz_6ab9wey8ujfiw1xgLb91hmHWnA9gXHwfukyUteRNdvLaSwLpNqgYlBLLrV6UxYpn9rq45uiVgI&token_type=Bearer&expires_in=3600
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
