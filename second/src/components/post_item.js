import React, {Component} from 'react';

class PostsItem extends Component {

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        return(
            <div class="panel panel-warning">
                <div class="panel-heading">Panel Items Post Heading</div>
                <div class="panel-body">Panel Post Items {this.props.match.params.name}</div>
            </div>
        )
    }
}

export default PostsItem