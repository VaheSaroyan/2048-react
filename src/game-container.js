import  React from 'react';
import  classnames from 'classnames';
import  TileContainer from './tile-container';
import  GridContainer from './grid-container';


class GameContainer extends React.Component{
  render() {
    var classes_ = classnames('game-message', {
      'game-won': this.props.won,
      'game-over': this.props.over
    });
    var message = this.props.won ? "You win!" : "Game over!";
    return (
      <div className="game-container">
        <div className={classes_}>
          <p>{message}</p>
          <div className="lower">
            <a className="keep-playing-button">Keep going</a>
            <a className="retry-button">Try again</a>
          </div>
        </div>

        <GridContainer size={this.props.size}/>
        <TileContainer size={this.props.size} tiles={this.props.tiles} />
      </div>
    );
  }
}

export default GameContainer;
