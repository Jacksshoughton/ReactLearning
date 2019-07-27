import React, {Component} from 'react';

class ShoppingListForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            qty: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state);
        this.setState({name: "", qty: ""})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height: </label>
                <input
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />

                <label htmlFor="width">Width: </label>
                <input
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <button>Add Item</button>
            </form>
        )
    }
}

export default ShoppingListForm;