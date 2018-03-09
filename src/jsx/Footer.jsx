import React from 'react';
import { connect } from 'react-redux';
import {setVisibilityFilter} from '../js/model.js';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};
const mapStateToLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
};
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);
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
const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter='SHOW_ALL'
    >
      All
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_ACTIVE'
    >
      Active
    </FilterLink>
    {', '}
    <FilterLink
      filter='SHOW_COMPLETED'
    >
      Completed
    </FilterLink>
  </p>
);

export default Footer;
