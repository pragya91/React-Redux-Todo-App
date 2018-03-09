import {connect} from  'react-redux';
import React from 'react';
import {toggleTodo} from '../js/model.js';

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>
);
const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      // Use the `Array.filter()` method
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
};
const mapStateToProps = (state)=>{
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};
const mapDispatchToProps = (dispatch)=>{
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
};
const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList);

// class VisibleTodoList extends Component {
//
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//   componentWillUnmount() {
//     this.unsubscribe();
//   }
//   render() {
//     const { store } = this.context;
//     const props = this.props;
//     const state = store.getState();
//
//     return (
//       <TodoList
//         todos={
//           getVisibleTodos(
//             state.todos,
//             state.visibilityFilter
//           )
//         }
//         onTodoClick={id =>
//           store.dispatch({
//             type: 'TOGGLE_TODO',
//             id
//           })
//         }
//       />
//     );
//   }
// }
// VisibleTodoList.contextTypes = {
//   store: PropTypes.object
// }

export default VisibleTodoList;
