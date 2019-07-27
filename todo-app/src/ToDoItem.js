import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return(
            <div className="ToDo">
                <h3>{this.props.name}</h3>
                <p>Edit</p>
                <button onClick={this.props.delete}>X</button>
            </div>
        );
    }
}
 
export default ToDoItem;