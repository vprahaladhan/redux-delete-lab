import React, { Component } from 'react';

class Band extends Component {

  render() {
    return (
      <li>
        {this.props.band.name}
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>
          DELETE
        </button>
      </li>
    );
  }
};

export default Band;