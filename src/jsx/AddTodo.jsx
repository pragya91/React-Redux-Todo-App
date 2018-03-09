import {connect} from  'react-redux';
import React from 'react';
import {addATodo} from '../js/model.js';


let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addATodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};

/*Not passing any argument to connect method results in not subscribing to the store, but still providing the dispatch method*/
AddTodo = connect()(AddTodo);

export default AddTodo;
