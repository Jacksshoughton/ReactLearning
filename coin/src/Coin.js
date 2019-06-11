import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Coin">
                <h1>Lets Flip a Coin!</h1>
                <img src={`https://tinyurl.com/react-coin-${this.props.side}-jpg`} alt={this.props.side}></img>
            </div>
        );
    }

}

export default Coin;