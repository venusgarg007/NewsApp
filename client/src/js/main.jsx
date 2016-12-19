import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory, Route, Router, IndexRoute} = require('react-router');

import About from './components/About.jsx';
import MainWindow from './components/MainComponent.jsx';
import NavBar from './components/NavBar.jsx';
import favNews from './components/favNews.jsx';

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
		<Route path="/home" component={MainWindow}/>
		<Route path="/about" component={About}/>
		<Route path="/news" component={favNews}/>
	</Route>
</Router>,document.getElementById('content'));