import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

import About from './components/About.jsx';
import MainComponent from './components/MainWindow.jsx';
import NavBar from './components/NavBar.jsx';

class Main extends React.Component {

	render() {
		return (
		<div>
		<NavBar/>
		  <br/><br/><br/><br/>
		    {this.props.children}
		</div>
		)
	}
}
ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={Main} >
		<IndexRoute component={MainWindow}/>
		<Route path="/home" component={MainComponent}/>
		<Route path="/about" component={About}/>
	</Route>
</Router>,document.getElementById('content'));