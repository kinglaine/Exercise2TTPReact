import React, { Component } from "react";
import PropTypes from "prop-types";
class IncrementDecrement extends Component{
    constructor(props){
        super(props);
        this.state =  {
            number: (props.number)
        }
        this.increment = this.increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }
    increment() {
        this.setState({number: this.state.number+1});
        console.log("is called");
    }
    Decrement() {
        this.setState({number: this.state.number-1});
        console.log("is called");
    }
    render(){
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }
}
IncrementDecrement.propTypes = {
    number: PropTypes.number.isRequired
  };
export default IncrementDecrement;