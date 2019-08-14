import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/action';
import store from '../store/index'

let selectVisibilityFilter = (filter) => {
  store.dispatch(setVisibilityFilter(filter))
}

let  FilterLink = ({children, filter}) => {
  return (
    <button onClick={()=>{selectVisibilityFilter(filter)}}>
        {children}
    </button>
  );
};

export default connect()(FilterLink);