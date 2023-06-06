import React, { Component } from "react";

class learning extends Component{

    state = {
        fruits:[
            {name:'mango',weight:'120gm'},
            {name:'grape',weight:'150gm'},
            {name:'apple',weight:'110gm'},
        ]
    }
    render(){
        return <h1> Fruit used is {this.state.fruits[0].name}</h1>
    }

}

export default learning