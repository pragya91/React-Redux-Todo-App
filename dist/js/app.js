webpackJsonp([0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(25);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(12);

var _reactRedux = __webpack_require__(17);

var _AddTodo = __webpack_require__(85);

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _VisibleTodoList = __webpack_require__(86);

var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);

var _Footer = __webpack_require__(87);

var _Footer2 = _interopRequireDefault(_Footer);

var _model = __webpack_require__(88);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


var TodoApp = function TodoApp() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AddTodo2.default, null),
    _react2.default.createElement(_VisibleTodoList2.default, null),
    _react2.default.createElement(_Footer2.default, null)
  );
};

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: (0, _redux.createStore)(_model2.default) },
  _react2.default.createElement(TodoApp, null)
), document.getElementById('root'));

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(17);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _model = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodo = function AddTodo(_ref) {
  var dispatch = _ref.dispatch;

  var input = void 0;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', { ref: function ref(node) {
        input = node;
      } }),
    _react2.default.createElement(
      'button',
      { onClick: function onClick() {
          dispatch((0, _model.addATodo)(input.value));
          input.value = '';
        } },
      'Add Todo'
    )
  );
};

/*Not passing any argument to connect method results in not subscribing to the store, but still providing the dispatch method*/
AddTodo = (0, _reactRedux.connect)()(AddTodo);

exports.default = AddTodo;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(17);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _model = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      completed = _ref.completed,
      text = _ref.text;
  return _react2.default.createElement(
    'li',
    {
      onClick: onClick,
      style: {
        textDecoration: completed ? 'line-through' : 'none'
      }
    },
    text
  );
};
var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;
  return _react2.default.createElement(
    'ul',
    null,
    todos.map(function (todo) {
      return _react2.default.createElement(Todo, _extends({
        key: todo.id
      }, todo, {
        onClick: function onClick() {
          return onTodoClick(todo.id);
        }
      }));
    })
  );
};

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      // Use the `Array.filter()` method
      return todos.filter(function (t) {
        return t.completed;
      });
    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: function onTodoClick(id) {
      dispatch((0, _model.toggleTodo)(id));
    }
  };
};
var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TodoList);

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

exports.default = VisibleTodoList;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(17);

var _model = __webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var active = _ref.active,
      children = _ref.children,
      _onClick = _ref.onClick;

  if (active) {
    return _react2.default.createElement(
      'span',
      null,
      children
    );
  }

  return _react2.default.createElement(
    'a',
    { href: '#',
      onClick: function onClick(e) {
        e.preventDefault();
        _onClick();
      }
    },
    children
  );
};
var mapStateToLinkProps = function mapStateToLinkProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

var mapDispatchToLinkProps = function mapDispatchToLinkProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0, _model.setVisibilityFilter)(ownProps.filter));
    }
  };
};
var FilterLink = (0, _reactRedux.connect)(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
// class FilterLink extends Component {
//
//   componentDidMount() {
//     const { store } = this.context;
//     this.unsubscribe = store.subscribe(() =>
//       this.forceUpdate()
//     );
//   }
//   componentWillUnmount() {
//     this.unsubscribe(); // return value of `store.subscribe()`
//   }
//
//   render () {
//     const { store } = this.context;
//     const props = this.props;
//     const state = store.getState();
//
//     return (
//       <Link
//         active={
//           props.filter ===
//           state.visibilityFilter
//         }
//         onClick={() =>
//           store.dispatch({
//             type: 'SET_VISIBILITY_FILTER',
//             filter: props.filter
//           })
//         }
//       >
//         {props.children}
//       </Link>
//     );
//   }
// };
// FilterLink.contextTypes = {
//   store: PropTypes.object
// }
var Footer = function Footer() {
  return _react2.default.createElement(
    'p',
    null,
    'Show:',
    ' ',
    _react2.default.createElement(
      FilterLink,
      {
        filter: 'SHOW_ALL'
      },
      'All'
    ),
    ', ',
    _react2.default.createElement(
      FilterLink,
      {
        filter: 'SHOW_ACTIVE'
      },
      'Active'
    ),
    ', ',
    _react2.default.createElement(
      FilterLink,
      {
        filter: 'SHOW_COMPLETED'
      },
      'Completed'
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoApp", function() { return todoApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addATodo", function() { return addATodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTodo", function() { return toggleTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVisibilityFilter", function() { return setVisibilityFilter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(12);


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

const todoApp = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  todos,
  visibilityFilter
});

/* harmony default export */ __webpack_exports__["default"] = (todoApp);

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




/***/ })

},[49]);