import React, {Component} from 'react';
import uuid from 'uuid/v4';

class BoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: "",
            width: "",
            color: ""
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
        const newBox = {...this.state, id: uuid()};
        this.props.createBox(newBox);
        this.setState({height: "", width: "", color: ""});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="height">Height: </label>
                </div>
                <input
                    id="height"
                    name="height"
                    type="text"
                    value={this.state.height}
                    onChange={this.handleChange}
                />

                <div>
                <label htmlFor="width">Width: </label>
                </div>
                <input
                    id="width"
                    name="width"
                    type="text"
                    value={this.state.width}
                    onChange={this.handleChange}
                />

                <div>
                <label htmlFor="color">Color: </label>
                </div>
                <input
                    id="color"
                    name="color"
                    type="text"
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <button>Add Item</button>
            </form>
        )
    }
}

export default BoxForm;