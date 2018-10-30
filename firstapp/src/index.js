import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/News_list';
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            news: JSON,
            filteredNews: JSON
        }

    }

    filterNews(keywords){
        console.log("coming form index file" + keywords)
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        })
        this.setState({filteredNews: filtered})
    }

    render(){
        return(
            <div>
                <Header newsSearch={(data) => this.filterNews(data)}/>
                <NewsList sendingnews={this.state.filteredNews}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))