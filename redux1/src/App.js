import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';


class App extends Component {

  componentWillMount(){
    this.props.moviesList()
  }

  render() {
    return (
      <h1> Hellow to redux</h1>
    );
  }
}

export default App;
