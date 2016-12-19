import React from 'react';
import SearchComponent from './SearchComponent.jsx'
import SearchArticles from './SearchArticles.jsx'

export default class MainComponent extends React.Component {
	constructor() {
		super();
		this.state = {provider : ''};
		{/*binding fxn to this*/}
		this.fetchNewsFromExternalAPI = this.fetchNewsFromExternalAPI.bind(this);
		this.state = {newsArr : ['']};
	}

	fetchNewsFromExternalAPI(provider) {
		var that = this;
		$.ajax({
			url: "https://newsapi.org/v1/articles?source="+provider+"&apiKey=084f2659b4864b4dab8debb2e55d0fd8",
			type: "GET",
			dataType: 'JSON',
			   
			success : function(obj) {

			/*obj represents JSON data of news headlines sent back by external API*/
			that.setState({newsArr : obj.articles});
			},
			error: function(err){
			}
		});
	}

	render() {
		var d = this.state.provider;
		return(
		<div>
		<SearchComponent value = {this.fetchNewsFromExternalAPI} />
		<SearchArticles newsArrRef = {this.state.newsArr} />
		</div>
		)
	}
}