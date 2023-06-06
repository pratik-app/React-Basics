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
    clickHandler = ()=>{
        console.log('Click Me is pressed')
        alert("Click Me is Pressed!")
    }
    textChanger = ()=>{
        this.setState({
            fruits:[
                {name:'banana',weight:'100gm'},
                {name:'giantBanana',weight:'150gm'},
                {name:'newBanana',weight:'110gm'},
            ]
        })
    }
    render(){
        return( 
        <div>
            <button onClick= {this.clickHandler}>Click Me</button> | &nbsp;
            <button onClick= {this.textChanger}>Change Texts</button>
        <h1> Fruit used is {this.state.fruits[0].name}</h1>
        <h1> Fruit used is {this.state.fruits[1].name}</h1>
        <h1> Fruit used is {this.state.fruits[2].name}</h1>
        </div>
        )
    }

}

export default learning