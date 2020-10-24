import React from 'react'
import {_Tile as Tile} from './tile'

class TileContainer extends React.Component{
  getChildren = () => {
    var children = [];
    this.props.tiles.forEach(function(item) {
      children.push(<Tile x={item.x} y={item.y} value={item.value} key={item.prog}/>);
    });
    return children;
  }
  render() {
    return <div className="tile-container">{this.getChildren()}</div>;
  }
}

export default TileContainer;
