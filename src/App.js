import React, { Component } from "react";
import './App.css';
import { connect } from 'react-redux';

class  App extends Component {
  render(){
    return (
      <div className="App">
        <p>Simple Counter App With Redux Saga!</p>
        <p>counter : {this.props.counter}</p> 
        <button onClick={this.props.increment}> Increment Counter </button><br />
        <button onClick={this.props.decrement}> Decrement Counter </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter : state.counter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment :() =>  dispatch({type: "INCREMENT", value: 1}),
    decrement : () => dispatch({type: "DECREMENT", value : 1})
  };
};

export default connect (mapStateToProps , mapDispatchToProps)(App);
