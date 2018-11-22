//1 Get Default State
//2 Set Initial State
//3 Before Get Created
//4 Render JSX
//5 After Component is Mounted
import React, {Component} from 'react';

class Lifecycle extends Component {
    //1 Get Default State
    constructor(props){
        super(props)
    
        //2 Set Initial State
        this.state = {
            title:"lifecycle"
        }
    }

    //3 Before Get Created
    componentWillMount(){
        console.log("before it created")
        
    }

    //4 Render JSX
    render(){
        return(
            <div>
                <h4>{this.state.title}</h4>
            </div>
        )
    }

    //5 After Component is Mounted
    componentDidMount(){
        console.log("after component mounted")
        document.querySelector('h4').style.color="red"
    }



}

export default Lifecycle;