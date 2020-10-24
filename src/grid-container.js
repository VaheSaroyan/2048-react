import React from 'react';
import GridRow from './grid-row';

class GridContainer extends React.Component{

  getChildren = () => {

    return Array.from(Array(Number(this.props.size))).map(() => <GridRow size={this.props.size}/>);

  }
  render() {
    return <div className="grid-container">{this.getChildren()}</div>;
  }
}

export default GridContainer;
