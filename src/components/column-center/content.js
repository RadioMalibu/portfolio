import React from 'react';

import './column-center.css';

class ContentBlock extends React.Component {
  render(){
    let imgClass = [''] ;
    if(this.props.move != "") {
      imgClass = ['none']
    }

    return (
      <div className="content-block-center">
        <img className={imgClass} src={require(`../../images/${this.props.img.url}`)} alt={this.props.img.alt} />
      </div>
    )
  }
}

export default ContentBlock;
