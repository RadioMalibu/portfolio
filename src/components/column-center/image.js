import React from 'react';
import PropTypes from 'prop-types';

import './column-center.css';

class ImageBlock extends React.Component {
  render(){
    let boxClass = ["image-block-center"];
      if(this.props.move == "next") {
        boxClass.push('transNext show');
      }else if(this.props.move == "prev"){
        boxClass.push('transPrev show')
      }

    return (
      <div className={boxClass.join(' ')}>
        <img src={require(`../../images/${this.props.img[0].url}`)} alt={this.props.img[0].alt} />
      </div>
    )
  }
}

export default ImageBlock;
