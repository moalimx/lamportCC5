import React, { Component } from 'react';
import {connect} from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

increaseSpeed = () =>{
  console.log('in speed control');
  this.props.dispatch({ type: 'INCREASE SPEED',
  action: ' '
})
  
}
decreaseSpeed = () =>{
  console.log('in speed control');
  this.props.dispatch({ type: 'DECREASE SPEED',
  action: ' '
})
  
}



  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.increaseSpeed}>Increase Speed</button>
        <p>SPEED: GOES HERE</p>
        <button onClick={this.decreaseSpeed}>Decrease Speed</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => {(
  reduxState
)}
export default connect(putReduxStateOnProps) (SpeedControl);