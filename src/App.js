import React, { useState } from "react";
import {todos as todosList} from "./todos";
import {v4 as uuid } from "uuid"
function App() {
 
const [todos, setTodos] = useState(todosList)
const [inputText, setInputText] = useState("")

const handleAddToDo = (event) => {
console.log(event.which)
if(event.which === 13) {
  const newId = uuid()
  const newTodo = {
      "userId": 1,
      "id": newId,
      "title": inputText,
      "completed": false
    }

    const newTodos = {
      ...todos
    }
    newTodos[newId] = newTodo
    setTodos(newTodos)
  setInputText("")

}
}

const handleToggle = (id) => {
  const newTodos = {...todos}
  newTodos[id].completed = !newTodos[id].completed
  setTodos(newTodos)
}


const handleDeleteTodo = (id) => {
  const newTodos = {...todos}
  delete newTodos[id]
  setTodos(newTodos)
}

const handleClearCompletedToDos = () => {
const newTodos = {...todos}
for(const todo in newTodos) {
  if(newTodos[todo].completed) {
    delete newTodos[todo]
  }
}
setTodos(newTodos)
}


    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input 
          onChange={(event)=> setInputText(event.target.value)}
          onKeyDown={(event) => handleAddToDo(event)}
          className="new-todo" 
          value={inputText}
          placeholder="What needs to be done?" 
          autoFocus />
        </header>
        <TodoList 
        todos={Object.values(todos)}
        handleToggle={handleToggle}
        handleDeleteTodo={handleDeleteTodo}
         />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button 
          className="clear-completed"
          onlick={() => handleClearCompletedToDos()}
          >
            Clear completed</button>
        </footer>
      </section>
    );
  }


function TodoItem(props) {
  
    return (
      <li className={props.completed ? "completed" : ""}>
        <div className="view">
          <input 
          className="toggle" 
          type="checkbox" 
          checked={props.completed} 
          onChange={() => props.handleToggle(props.id)}
          />
          <label>{props.title}</label>
          <button 
          className="destroy" 
          onClick={() => props.handleDeleteTodo(props.id)}
          />
        </div>
      </li>
    );
  }

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

export default App;
