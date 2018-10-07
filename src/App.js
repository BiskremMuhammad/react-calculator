import React, { Component } from 'react';
import { connect } from 'react-redux';

// import action types
import * as actionTypes from './store/actions';

import Screen from './components/screen';
import Button from './components/button';

class App extends Component {

  render() {
    let buttons = [];
    for(let i = 12; i >= 0; i= i - 3){
      let row = i;
      for(let j = 4; j > 0; j--){
        let display = '';
        let value = row;
        let action = '';
        if(i === 0 && j === 1)
          display = 'long';
        if(j === 4)
          display = 'action';

        // first row >> Clear, plus/minus, % , /
        if(i === 12){
          if(j === 4){
            value = '÷';
            action = () => {this.props.divide()};
          }
          if(j === 3){
            value = '%';
            action = () => {this.props.mod()};
          }
          if(j === 2){
            value = '±';
            action = () => {this.props.negative()};
          }
          if(j === 1){
            value = 'C';
            action = () => {this.props.clear()};
          }
        }

        // Second row >> x, 9-7
        if(i === 9 && j === 4){
          value = 'x';
          action = () => {this.props.multiply()};
        }

        // Third row >> +, 6-4
        if(i === 6 && j === 4){
          value = '+';
          action = () => {this.props.plus()};
        }

        // Fourth row >> -, 3-1
        if(i === 3 && j === 4){
          value = '-';
          action = () => {this.props.minus()};
        }

        // Fifth row >> =, ., long Zero
        if(i === 0){
          if(j === 4){
            value = '=';
            action = () => {this.props.equal()};
          }
          if(j === 3){
            value = '.';
            action = () => {this.props.addNumber('.')};
          }
          if(j === 1){
            value = '0';
            action = () => {this.props.addNumber(0)};
          }
          if(j === 0)
            value = '';
        }

        if(value === row){
          row--;
          action = () => {console.log('shout out');  this.props.addNumber(value)};
        }

        let id = i - j;

        if(value){
          buttons.push(
            <Button key={id} action={() => action()} display={display} value={value} />
          );
        }
      }
    }

    let rows = [];

    for(let i = 0; i < 5; i++){
      let buttonsCopy = [...buttons];
      buttonsCopy.splice(4);
      rows.push(
        <div key={i+1} className="d-flex btn-row">
        {buttonsCopy.map(button => button)}
        </div>
      );
      buttons.splice(0,4);
    }

    return (
      <div className="wrapper">
        <div className="calculator">
          <Screen result={this.props.screen} history={this.props.history} />
          <div className="body">
          {rows.map(row => row)}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    screen: state.screen,
    result: state.result,
    history: state.history
  };
}

const mapActionsToProps = dispatch => {
  return {
    addNumber: (num) => dispatch({type: actionTypes.ADD_NUMBER, value: num}),
    plus: () => dispatch({type: actionTypes.PLUS}),
    minus: () => dispatch({type: actionTypes.MINUS}),
    divide: () => dispatch({type: actionTypes.DIVIDE}),
    multiply: () => dispatch({type: actionTypes.MULTIPLY}),
    mod: () => dispatch({type: actionTypes.MOD}),
    negative: () => dispatch({type: actionTypes.NEGATIVE}),
    clear: () => dispatch({type: actionTypes.CLEAR}),
    equal: () => dispatch({type: actionTypes.EQUAL})
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
