import React from 'react';
import { connect } from 'react-redux';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../actions/action';

const mapStateToProps = state => ({
  todos: state.todos,
});

let  Footer = () => {
  return (
    <div className="footer">
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  );
};

export default connect(
  mapStateToProps
)(Footer);