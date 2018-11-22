import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Post from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/post_item';
import Lifecycle from './components/lifecycle';
import NotFound from './components/notFound';

class App extends Component {
    render(){
        return(
            <div class="panel panel-success">
                <div class="panel-heading">Panel Home Heading</div>
                <div class="panel-body">Panel Home</div>
             </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                        <a className="navbar-brand" href="#">Malabika React</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li> <Link to="/posts">Posts</Link></li> 
                            <li> <Link to="/profile">Profile</Link></li> 
                            <li> <Link to="/lifecycle">Lifecycle</Link></li>
                             
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                
               
               
            </header>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts" component={Post}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/posts/:name" component={PostsItem}></Route>
            <Route exact path="/lifecycle" component={Lifecycle}></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root'))