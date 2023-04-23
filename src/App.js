import React from 'react';
import { connect } from 'react-redux';
import { Inaction } from './actions';
import { Decaction } from './actions';
const App = ({local_variable,Inaction,Decaction}) => {
  return (
    <div>
      <center>
      <h1>Hello World</h1>
      <h1>{local_variable}</h1><br/>
      <button onClick= {Inaction} >Increment</button>
      <button onClick= {Decaction} >Decrement</button>
      </center>
    </div>
  );
};
const mapStateToProps=state=>({
  local_variable : state
})
export default connect(mapStateToProps,{Inaction,Decaction})(App);

