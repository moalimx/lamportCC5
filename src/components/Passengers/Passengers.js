import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
state = {
  passenger: ''
}

currentPassengers = (event,propertyName) =>{
this.setState({
  [propertyName]: event.target.value
})
}

addPassengers = (event,propertyName) =>{
  this.props.dispatch({type:'ADD PASSENGER'})
  }

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name"
        onChange={(event) => this.currentPassengers(event,'name')}
        
        placeholder="Enter Name" />
        <button onClick={this.addPassenger}>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE</ul>
      
      </div>
    )
  }
}
const putReduxStateOnProps = (reduxState) => {(
  reduxState
)}

export default connect(putReduxStateOnProps) (Passengers);