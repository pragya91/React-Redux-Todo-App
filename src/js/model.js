import { combineReducers } from 'redux';

/*--------------------- REDUCERS---------------_*/
const todo = (state, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      //return {...state, completed: !state.completed};
      return Object.assign({},state,{completed: !state.completed});

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action) ];

    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;

/*---------------------- Action creators -------------*/
let nextTodoId = 0;
const addATodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  }
};
const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
};
const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
};

export {todoApp, addATodo, toggleTodo, setVisibilityFilter};
