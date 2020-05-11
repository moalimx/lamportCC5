import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const firstReducerInitialState = 0;

const firstReducer = (state = 0, action)=>{
    if (action.type === 'INCREASE SPEED'){
        return state + 1
    } else( action.type === 'DECREASE SPEED'){
        return state -1
    }
    
}
// use reducer in store
const storeInstance = createStore( 
   firstReducer
 );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
