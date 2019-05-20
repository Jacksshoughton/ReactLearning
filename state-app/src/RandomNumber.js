import React, {Component} from 'react';

class RandomNumber extends Component {
    constructor(props){
        super(props)
        this.state = {num: 0, isWinner: false, clicked: false};
        this.generateRandom = this.generateRandom.bind(this);
    }
    generateRandom(){
        let random = Math.floor(Math.random() * 11);
        this.setState({num: random});
        this.setState({clicked: true});
        if(random === 7){
            this.setState({isWinner: true});
        }
    }

    render(){
        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.isWinner?<h1>Winner!</h1>: <button onClick={this.generateRandom}>Generate Number</button>}
                {/* <button >{this.state.num == 7? <h1>Winner!!</h1>: "Random Number"}</button> */}
            </div>
        );
    }
}

export default RandomNumber;