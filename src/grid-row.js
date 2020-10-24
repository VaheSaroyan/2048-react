import React from 'react';
import GridCell from'./grid-cell';

class GridRow extends React.Component{
  getChildren = () => {
    return Array.from(Array(Number(this.props.size))).map(() => <GridCell/>);
  }
  render() {
    return <div className="grid-row">{this.getChildren()}</div>;
  }
}

export default  GridRow;
