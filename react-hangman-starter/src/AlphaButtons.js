import React, {Component} from 'react';
import './AlphaButtons.css';

class AlphaButtons extends Component{
    constructor(props){
        super(props);
        
    }


//       /** generateButtons: return array of letter buttons to render */
//   generateButtons() {
//       let letters = this.props.letters;
//      letters.split("").map(ltr => (
//       <button
//         value={ltr}
//         // onClick={this.handleGuess}
//         // disabled={this.state.guessed.has(ltr)}
//         key={ltr}
//       >
//         {ltr}
//       </button>
//     ));

  render(){
      return(
          this.props.letters.split("").map(ltr => (
              <button className="Hangman-button"
              value={ltr}
              key={ltr}
              ></button>
          ))
      )
  }
}

export default AlphaButtons;