import React, { useState } from "react";
import {todos as todosList} from "./todos";

function App() {
 
const [todos, setTodos] = useState(todosList)

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        <TodoList todos={Object.values(todos)} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }


function TodoItem(props) {
  
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={props.completed} />
          <label>{props.title}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }

function TodoList(props) {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem title={todo.title} completed={todo.completed} />
          ))}
        </ul>
      </section>
    );
  }

export default App;
