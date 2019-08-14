import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/action';
import store from '../store';

const toggleTodoMy = function(id) {
    store.dispatch(toggleTodo(id));
  };

let TodoList = ({todos}) => {
    return (
        <div className="todolist">
            <ul>
            {(todos || []).map(todo => (
            <li key={todo.id}  
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }} 
                onClick={() => toggleTodoMy(todo.id)
                }
                >{todo.text}</li>
            ))}
            </ul>
        </div>
    )
}

export default connect()(TodoList);