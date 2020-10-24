var React = require('react'),
  classnames = require('classnames');

export class _Tile extends React.PureComponent{

 constructor() {
   super();
   this.state = {
     previousPosition: null,
     mergedFrom:       null,
     isNew:            true
   }
 }
  render() {
    var classnames_ = classnames('tile', 'tile-' + this.props.value,
    ['tile-position', this.props.x + 1, this.props.y + 1].join('-'), {
      'tile-new' : this.state.isNew
    })
    return (
      <div className={classnames_}><div className="tile-inner">{this.props.value}</div></div>
    );
  }
  componentDidUpdate() {
    // this.setState({
    //   previosuPosition: {
    //     x: this.props.x,
    //     y: this.props.y
    //   },
    //   isNew: false
    // });
  }
};

var _prog = 0;

export function Tile(position, value) {

  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
  this.prog             = _prog++;
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

