import React, { Component } from 'react'
import './index.css'

class Counter extends Component{
    state = {count:0}
    
    onIncrement = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }
    render(){
        const {count} = this.state
        return(
        <div className='home'>
            <h1 className='main-head'>The Button had been clicked <span>{count}</span> of times</h1>
            <p className='main-para'> CLick the button to increase the count</p>
            <button className = "click-button" onClick={this.onIncrement}>Click Me</button>
        </div> )
    }
}

export default Counter