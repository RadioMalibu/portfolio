import React from 'react';

import './column-right.css';

class ColumnRightCorner extends React.Component {
  onNext = () => {
    if(this.props.onMove === "next"){
      return
    }else if(this.props.onMove === ""){
      this.props.onNextClick()
    }
  }

  render(){
    let nextClass = ["next-block-next"];

    if(this.props.onMove === "next"){
      nextClass.push('transNext show');
    }else if(this.props.onMove === "prev"){
      nextClass.push('transPrev ');
    }

    return (
      <div className={nextClass.join(' ')}>
        <img src={require(`../../images/${this.props.image[0].url}`)} alt={this.props.image[0].alt} />
      </div>
    )
  }
}

export default ColumnRightCorner;
