import React from 'react';
import PropTypes from 'prop-types';

import './column-center.css';

class TextBlock extends React.Component {
  state = {
    active: 'div0'
  }

  swapImage = (e) => {
    const clicked = e.target.id
    this.setState({active: clicked})
    this.props.onNextImageClick(clicked.split("v").pop())
  }

  createCounter = (img) => {
    let table = []
    let width = (80 / img);

    for(let i = 0; i < img; i++){
      table.push(<div className={`counter ${this.state.active === "div"+ i? 'current': ''}`} id={"div"+ i } onClick={this.swapImage} style={{width:width + "%"}} key={i}></div>)
    }
    return table
  }

  render(){
    return (
      <div>
        <div className="content-title-block">
          <h1>{this.props.title}</h1>
        </div>
        <div className="multiple-images-container">
          {this.createCounter(this.props.img)}
        </div>
      </div>
    )
  }
}

export default TextBlock;
