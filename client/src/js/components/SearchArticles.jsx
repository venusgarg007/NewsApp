import React from 'react';
import SearchDisplay from './SearchDisplay.jsx'

export default class SearchArticles extends React.Component {
	constructor() {
		super();
	}

	render() {
		
		return(
		<div>
		{
			this.props.newsArrRef.map(function(newsObj) {
				return (<SearchDisplay newsObjRef = {newsObj} />)
			})
		}
		</div>
		)
	}
}