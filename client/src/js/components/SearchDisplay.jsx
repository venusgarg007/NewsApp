import React from 'React'

export default class SearchDisplay extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
		<div>
			<jumbotron>{this.props.newsObjRef.title}
			{this.props.newsObjRef.description}
			<img id="searchImage" src={this.props.newsObjRef.urlToImage} width="100px" height="100px"/></jumbotron>
		</div>
		)
	}
}