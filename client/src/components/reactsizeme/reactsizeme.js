import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';

class foodphoto extends Component {
  render() {
    const { 
      size: { 
        width
      } 
    } = this.props;

    return (
      <StackGrid
        // more...
        columnWidth={width <= 768 ? '1%' : '33.33%'}
      >
        // Grid items...
      </StackGrid>
    );
  }
}

export default sizeMe()(foodphoto);