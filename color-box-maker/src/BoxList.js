import React, {Component} from 'react';
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props){
        super(props)
        this.create = this.create.bind(this);
        this.state = {
            boxes: [
                {width: 10, height: 40, color: "orange"}
            ]
        };
    }

    create(newBox){
        this.setState({
            boxes: [...this.state.boxes, newBox]
        });
    }

    remove(id){
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        });
    }

    render(){
        const boxes = this.state.boxes.map(box => (
            <Box key={box.id} id={box.id} width={box.width} height={box.height} color={box.color} removeBox={() => this.remove(box.id)}/>
        ));
        return(
            <div>
                <h1>Box List</h1>
                <BoxForm createBox={this.create}/>
                {boxes}
            </div>
        )
    };
}

export default BoxList;