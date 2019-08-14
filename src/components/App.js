import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { addTodo, VisibilityFilters } from '../actions/action';

import './App.css';
import TodoList from './TodoList';
import Footer from './Footer';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = function(state){
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const addTodoMy = function(params) {
  params.trim() != '' && store.dispatch(addTodo(params));  
};

let  App = ({todos}) => {
  let input;
  return (
    <div className="block-component">
      <form className="input-block" onSubmit={(e)=> {
          e.preventDefault();
          addTodoMy(input.value); 
          input.value = ''}}
        >
        <input ref={node => (input = node)} />
        <button>
          Add Todo
        </button>
      </form>
       
      <TodoList todos={todos}/>
      <Footer/>
      </div>
  );
};

export default connect(
  mapStateToProps
)(App);