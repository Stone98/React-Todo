import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [];

class App extends React.Component {
  // you will need a place to store your state in this component
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos,
    }
  }



  render() {
    return (
      <div>
        <div>
          <h2>Todo List: MVP!</h2>
          <TodoForm />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default App;
