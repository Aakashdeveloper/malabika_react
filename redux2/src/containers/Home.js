import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreaters } from 'redux';

import LatestNews from '../components/home/latest'

class Home extends Component {

    componentDidMount(){
        this.props.latestNews();
    }
    
    render(){
        return (
            <div>
                <LatestNews/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreaters({latestNews}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (Home);