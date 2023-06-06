import React, { Component } from "react";

class learning extends Component{
 constructor(props){
    super(props)
    this.state = {
        fruits:[
            {name:'mango',weight:'120gm'},
            {name:'grape',weight:'150gm'},
            {name:'apple',weight:'110gm'},
        ]
    }}
    render(){
        return( 
        <div>
        <h1> Fruit used is {this.state.fruits[0].name}</h1>
        <h1> Fruit used is {this.state.fruits[1].name}</h1>
        <h1> Fruit used is {this.state.fruits[2].name}</h1>
        </div>
        )
    }

}

export default learning