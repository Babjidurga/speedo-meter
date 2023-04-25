import { Component } from "react";  
import './index.css'

 class Welcome extends Component{
    state = {count:0}
    onIncrement = () =>{
        this.setState((prevState) => (
            {count: prevState.count + 1}))
    }
    onDecrement = () =>{
        this.setState((prevState) => ({count: prevState.count - 1}))
    }
    reset = () =>{
        this.setState((prevState) => ({count: 0}))
    }
    render(){

        const {count} = this.state
        console.log({count})
        return(
            <div className="container">
                    <h1 className="name"> Counter</h1>
                    <p className="value">{count}</p>
                    <div className="b-con">
                        <button className="button" onClick={this.onIncrement}>Increment</button>
                        <button className = "button" onClick={this.onDecrement}>Decrement</button>
                        <button className = "button" onClick={this.reset}>Reset</button>
                    </div>
            </div>
        )
    }
 }

 export default Welcome