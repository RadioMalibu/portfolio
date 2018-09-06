import React from 'react';

import './column-left.css';

class ColumnLeftCorner extends React.Component {
  onNext = () => {
    if(this.props.onMove == "prev"){
      return
    }else if(this.props.onMove == ""){
      this.props.onNextClick()
    }
  }

  render(){
    let prevClass = ["previous-block-prev"];

    if(this.props.onMove == "prev"){
      prevClass.push('transPrev show');
    }else if(this.props.onMove == "next"){
      prevClass.push('transNext ');
    }

    return (
      <div className={prevClass.join(' ')}>
        <img src={require(`../../images/${this.props.image[0].url}`)} alt={this.props.image[0].alt} />
      </div>
    )
  }
}

export default ColumnLeftCorner;
