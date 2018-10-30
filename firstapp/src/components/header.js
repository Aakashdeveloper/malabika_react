import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props)

        this.state ={
            title:'React App',
            keywords:''
        }
    }
    inputChange(event){ 
        // console.log({keywords: event.target.value})
        this.setState({keywords:event.target.value})
    }

render(){
    return (
        <header className="header">
            <div className="logo"
            onClick={() => console.log("HIIIIIII")}>
                {this.state.title}
            </div>
            <center>
                <input onChange={this.inputChange.bind(this)}type="text"/>
                <p>{this.state.keywords}</p>
            </center>
        </header>
    )
}
    
}

export default Header;



/*
const styles = {
        header:{
            backgroundColor:'red'
        },
        logo: {
            textAlign:'center',
            fontSize:'30px',
            color:'white'
        }
    }

    <header style={styles.header}>
            <div style={styles.logo}>Logo</div>
            <center>
                <input type="text"/>
            </center>
        </header>
*/