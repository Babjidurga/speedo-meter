import React, { Component } from 'react'
import './index.css'

class Counter extends Component{
    state = {count:0}
    
    onIncrement = () => {
        const {count} = this.state
        if (count < 200){
            this.setState((prevState) => ({count: prevState.count + 20}))
        }else{
            this.setState((prevState) => ({count: prevState.count }))
        }
        
    }
    onDecrement = () => {
        const {count} = this.state
        if (count > 0){
            this.setState((prevState) => ({count: prevState.count - 20}))
        }else{
            this.setState((prevState) => ({count: prevState.count }))
        }
    }
    render(){
        const {count} = this.state
        return(
        <div className='home'>
            <h1>S P E E D O M E T E R </h1>
            <img src = "https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="Counter" className='image' />
            <h3 className='main-head'>Speed is <span>{count}</span> mph</h3>
            <p className='main-para'>Min limit is 0 mph, Max limit is 200 mph</p>
            <div className='button-contianer'>
                <  button className = "accelerate-button" onClick={this.onIncrement}>Accelerate</button>
                <  button className = "brake-button" onClick={this.onDecrement}>Apply Brake</button>
            </div>
            
        </div> )
    }
}

export default Counter