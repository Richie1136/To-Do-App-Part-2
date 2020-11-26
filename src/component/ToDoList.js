import React from 'react'
import TodoItem from './ToDoItem'



function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem 
          title={todo.title} 
          completed={todo.completed}
          id={todo.id}
          handleToggle={props.handleToggle}
          handleDeleteTodo={props.handleDeleteTodo}
          key={todo.id} 
          />
        ))}
      </ul>
    </section>
  );
}


export default TodoList

