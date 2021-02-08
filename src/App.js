import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }

  handleTodoAdd = (todoName) => {
    const todo = {
      name: todoName,
      id: new Date().getTime().toString(),
      completed: false
    }
    const newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos
    })
  }

  handleTodoToggle = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo, completed: !todo.completed
          }
        }
        return (todo);
      })
    })
  }

  handleTodosCompleted = () => {
    const newTodos = this.state.todos.filter((todo) => {
      return (!todo.completed)
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todo List: MVP!</h2>
          <TodoList todos={this.state.todos} handleTodoToggle={this.handleTodoToggle} />
        </div>
        <TodoForm handleTodoAdd={this.handleTodoAdd} handleTodosCompleted={this.handleTodosCompleted} />
      </div>
    );
  }
}

export default App;
