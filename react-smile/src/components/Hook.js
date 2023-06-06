import React, { useState } from "react"; 
    
 // Creating Funtional Component
    const Hook = props =>{
    const [fruitsState, setfruitsState]  =  useState({
            fruits:[
                {name:'mango',weight:'120gm'},
                {name:'grape',weight:'150gm'},
                {name:'apple',weight:'110gm'},
            ]
        })
        const clickHandler = ()=>{
            setfruitsState({
                fruits:[
                    {name:'banana',weight:'100gm'},
                    {name:'giantBanana',weight:'150gm'},
                    {name:'newBanana',weight:'110gm'},
                ]
            })
        }
        return( 
        <div>
            <button onClick= {clickHandler}>Click Me</button> | &nbsp;
        <h1> Fruit used is {fruitsState.fruits[0].name}</h1>
        <h1> Fruit used is {fruitsState.fruits[1].name}</h1>
        <h1> Fruit used is {fruitsState.fruits[2].name}</h1>
        </div>
        )
    }

export default Hook
