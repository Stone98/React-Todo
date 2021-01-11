import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
    }

    handleChanges = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleTodoAdd(this.state.inputValue);
        this.setState({
            inputValue: '',
        })
    }

    handleClick = () => {
        this.props.handleTodosCompleted();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todo" placeholder='...todo' value={this.state.inputValue} onChange={this.handleChanges} />
                <button>Add Todo</button>
                <button onClick={this.handleClick} >Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;