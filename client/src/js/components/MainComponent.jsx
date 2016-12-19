import React from 'react';
import SearchComponent from './SearchComponent'
import ComponentManager from './ComponentManager'

export default class MainWindow extends React.Component {
  constructor(){
    super();
    this.state = {newsArr:[]};
    this.fetchNewsFromExternalAPI = this.fetchNewsFromExternalAPI.bind(this);
  }

  fetchNewsFromExternalAPI(provider) {
    var that = this;
     $.ajax({
      url: "https://newsapi.org/v1/articles?source="+provider+"&apiKey=084f2659b4864b4dab8debb2e55d0fd8",
      type: "GET",
      dataType: 'JSON',
      success : function(msg){
      /*msg represents JSON data of news headlines sent back by external API*/
      var arr = msg.articles;
      that.setState({newsArr:arr});
      },
      error: function(err){
        console.log('error');
      }
  });
  }

  render(){
    return(
      <div>
        <SearchComponent sendSearchValue = {this.fetchNewsFromExternalAPI} />
        <ComponentManager newsArrRef={this.state.newsArr} />
      </div>
    )
  }
}