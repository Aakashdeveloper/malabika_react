import React, {Component} from 'react';

import Banner from '../components/banner';
import ArtistList from './artistList';

const URL_ARTISTS = 'http://localhost:8900/artists';

class Home extends Component {
    constructor(props){
        super(props);

        this.state ={
            artists:''
        }

    }

    componentDidMount(){
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                artists:data
            })
        })
    }

    render(){
        return(
            <div>
                <Banner></Banner>
                <ArtistList allArtists={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;