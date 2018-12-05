import React, {Component} from 'react';
import { latestNews, otherNews, showGallery} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LatestNews from '../components/home/latest'
import OtherNews from '../components/home/otherNews';
import Gallery from '../components/home/gallery';

class Home extends Component {

    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.showGallery();
    }
    
    render(){
        return (
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
                <Gallery latestGallery={this.props.gallery.latestGallery}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles,
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,otherNews, showGallery}, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps) (Home);