import React from 'react';
import ContentBlock from './content.js';
import ImageBlock from './image.js';
import TextBlock from './textBlock.js';
import PropTypes from 'prop-types';

import './column-center.css';

class ColumnCenter extends React.Component {
  render(){

    return (
      <div>
        <div className="content-block">
          <ContentBlock move={this.props.onMove} img={this.props.image}/>
          <ImageBlock move={this.props.onMove} img={this.props.image}/>
        </div>
        <div className="titel-block" >
          <TextBlock title={this.props.title}/>
        </div>
      </div>
    )
  }
}

export default ColumnCenter;
