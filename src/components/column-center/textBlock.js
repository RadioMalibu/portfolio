import React from 'react';
import PropTypes from 'prop-types';

import './column-center.css';

class TextBlock extends React.Component {

  render(){
    return (
      <div>
        <div className="content-title-block">
          <h1>{this.props.title}</h1>  
        </div>
      </div>
    )
  }
}

export default TextBlock;
