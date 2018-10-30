import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/News_list';
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            news: JSON
        }

    }

    render(){
        return(
            <div>
                <Header/>
                <NewsList sendingnews={this.state.news}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))