import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home';
import Header from './components/header';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>This is first Component</h1>
            <h1>Hiiiii</h1>
            <Home/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))