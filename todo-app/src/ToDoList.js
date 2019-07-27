import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.createToDo = this.createToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
        this.state = {
            todos: [
                {name: ""}
            ]
        };
    }


    createToDo(newToDo){
        this.setState({
            todos: [...this.state.todos, newToDo]
        });
    }

    deleteToDo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    render() { 
        const todos = this.state.todos.map(todo => (
            <ToDoItem name={todo.name} delete={() => this.deleteToDo(todo.id)}/>
        ));
        return(
            <div>
                <h1>To Do List App</h1>
                

                <NewToDoForm
                    createNew={this.createToDo}
                />
                {todos}
            </div>
        );
    }
}
 
export default ToDoList;