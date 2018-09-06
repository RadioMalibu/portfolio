import React from 'react';
import ContentBlock from './content.js';
import ImageBlock from './image.js';
import TextBlock from './textBlock.js';
import PropTypes from 'prop-types';

import './column-center.css';

class ColumnCenter extends React.Component {
  state = {
    index: '0'
  }

  nextImage = (index)  =>{
    this.setState({
      index: index
    })
  }

  render(){
    return (
      <div>
        <div className="content-block">
          <ContentBlock
            move={this.props.onMove}
            img={this.props.image}
            index={this.state.index}
          />
          <ImageBlock
            move={this.props.onMove}
            img={this.props.image}
          />
        </div>
        <div className="titel-block" >
          <TextBlock
            title={this.props.title}
            img={this.props.image.length}
            onNextImageClick = {(index) => this.nextImage(index)}
          />
        </div>
      </div>
    )
  }
}

export default ColumnCenter;
