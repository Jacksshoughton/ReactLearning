import React from 'react';
import './Die.css';

class Die extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="Die">
                <i className={`${this.props.rolling} fas fa-dice-${this.props.face}`}></i>
            </div>
        );
    }
}

export default Die;