import React, { Component } from "react";

class check extends Component{
    // One way to pass values dynamically
//  constructor(props){
//     super(props)
//     this.state = {
//         men:[
//             {name: "pratik"},
//             {age:"26"}
//         ]
//     }
//  }

// Second Way to pass values dynamically

state = {
    name:"pratik"
}

changeName = (e) =>{

    this.setState({
        name:e.target.value
    })
}
    render(){
        return( 
        <div>
            <input type="text" name="username" onChange={this.changeName} value={this.state.name}/>
        <h1> I am {this.state.name}</h1>
        
        </div>
        )
    }

}

export default check