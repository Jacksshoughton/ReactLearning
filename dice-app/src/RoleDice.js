import React from 'react';
import Die from './Die';
import './RoleDice.css';

class RoleDice extends React.Component{
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props){
        super(props);
        this.roll = this.roll.bind(this);
        this.rollAnimate = this.rollAnimate.bind(this);
        this.rollState = this.rollState.bind(this);
        this.state = ({die1: 'one', die2: 'one', rolling: "", clicked: false});
    }

    rollState(e){
        this.roll();
        this.rollAnimate();
    }

     roll(){
        //Pick 2 new rolls
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        
        this.setState({die1: newDie1, die2: newDie2});
    }

    rollAnimate(){
        this.setState({rolling: "roll-animate", clicked: true});
            setTimeout(()=>{
                this.setState({rolling: ""});
                this.setState({clicked: false});
            }, 700);    
    }

    render(){
        return(
            <div className="roll-dice">
                <div className="Dice">
                    <Die
                        face={this.state.die1}
                        rolling={this.state.rolling}
                    />
                    <Die 
                        face={this.state.die2}
                        rolling={this.state.rolling}
                    />
                </div>
                {this.state.clicked?<button disabled className="roll-dice-button">Rolling....</button>: <button className="roll-dice-button" onClick={this.rollState} >Roll Dice</button>}
                   
             </div>
        );
    }
}

export default RoleDice;