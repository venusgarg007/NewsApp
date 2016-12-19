import React from 'react';

export default class SearchComponent extends React.Component {
	constructor() {
		super();
		this.fetchData = this.fetchData.bind(this);
	}

	fetchData() {
		var searchData = document.getElementById('searchbox').value;
		this.props.value(searchData);
	}

	render() {
		return(
		<div>
		<input type = "text" id = "searchbox" placeholder = "Search here..." />
		<input type = "button" id = "searchbutton" onClick = {this.fetchData} value="search" />
		</div>
		)
	}
}