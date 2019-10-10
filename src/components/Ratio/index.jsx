import './index.css';
import React from 'react';
import Ratio from './Ratio';

class RatioDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      x: 5,
      y: 5
    }

    this.handleXSteping = this.handleXSteping.bind(this);
    this.handleYSteping = this.handleYSteping.bind(this);
  }

  handleXSteping() {
    this.setState({
      x: this.state.x + 1
    })
  }

  handleYSteping() {
    this.setState({
      y: this.state.y + 1
    })
  }
  
  render() {
    return (
      <>
        <button onClick={this.handleXSteping}>x+1</button>
        <button onClick={this.handleYSteping}>y+1</button>
        <div className="container">
          <Ratio {...this.state}>
            {(width, height, hasComputed) => (
              hasComputed ?
              <div style={{width, height, background: 'yellow'}}>Hello world!</div> : null
            )}
          </Ratio>
        </div>
      </>
    )
  }
}

export default RatioDemo;
