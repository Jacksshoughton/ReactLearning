import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {name: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        const newToDo = {...this.state, id: uuid()};
        this.props.createNew(newToDo);
        this.setState({name: ""});
    }


    render() { 
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="todo">New ToDo</label>
                </div>
                <input
                    type="text"
                    name="name"
                    id="name"                
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                
                <button>Add ToDo</button>
            </form>
        );
    }
}
 
export default NewToDoForm;