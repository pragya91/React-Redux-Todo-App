import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {createStore} from 'redux';
import { Provider , connect} from  'react-redux';

import AddTodo from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import Footer from './Footer.jsx';
import todoApp from '../js/model.js';


/* The following provider class is provided by react-redux. No need to define the component on your own */

// class Provider extends Component{
//   getChildContext(){
//     return {
//       store: this.props.store
//     }
//   }
//   render(){
//     return this.props.children;
//   }
// }
// Provider.childContextTypes = {
//   store: PropTypes.object
// }


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);


ReactDOM.render(
  <Provider store = {createStore(todoApp)} >
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
