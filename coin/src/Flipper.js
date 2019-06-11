import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props){
        super(props);
        this.state = ({side: "heads", flips: 0, headFlips: 0, tailFlips: 0});
        this.flip = this.flip.bind(this);
        this.addFlip = this.addFlip.bind(this);
        this.addHeadFlip = this.addHeadFlip.bind(this);
        this.addTailFlip = this.addTailFlip.bind(this);
    }
    flip(){
        let faceNum = Math.floor(Math.random() * 2);
        let faceString;
        if (faceNum == 1){
            faceString = "heads";
            this.addHeadFlip();
        } else {
            faceString = "tails";
            this.addTailFlip();
        }
        this.setState({side: faceString});
        this.addFlip();
    }
    addFlip(){
        this.setState(st => {
            return { flips: st.flips + 1};
        })
    }
    addHeadFlip(){
        this.setState(st => {
            return { headFlips: st.headFlips + 1};
        })
    }
    addTailFlip(){
        this.setState(st => {
            return { tailFlips: st.tailFlips + 1};
        })
    }

    render(){
        return(
            <div>
                <Coin 
                    side={this.state.side}
                />
                <button onClick={this.flip}>Flip Me!</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.headFlips} heads and {this.state.tailFlips} tails.</p>
            </div>
        )
    }
}

export default Flipper;