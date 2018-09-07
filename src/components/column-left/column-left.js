import React from 'react';
import Navigation from './navigation';

import './column-left.css';

class ColumnRight extends React.Component {
  onPrevious = () => {
    if(this.props.onMove === "prev"){
      return
    }
    else if(this.props.onMove === ""){
      this.props.onPreviousClick()
    }
  }

  setSection = (section) => {
    this.props.onSetSection(section)
  }

  render(){
    let prevClass = ["previous-block-image"];
    let imgClass = ["previous-image"];

    if(this.props.onMove === "next") {
      prevClass.push('transNext show');
      imgClass.push('none');
    }else if(this.props.onMove === "prev"){
      prevClass.push('transPrev show');
      imgClass.push('none');
      // if(this.state.open){
      //   textBlockClass = ['text-block-section'];
      // }
    }

    return (
      <div>
        <div className="previous-block" onClick={this.onPrevious}>
          <div className="prev-block-cut">
            <img className={imgClass.join(' ')} src={require(`../../images/${this.props.image[0].url}`)} alt={this.props.image[0].alt} />
          </div>
          <div className={prevClass.join(' ')}>
            <img src={require(`../../images/${this.props.image[0].url}`)} alt={this.props.image[0].alt} />
          </div>
        </div>
        <div className="navigation-block">
          <Navigation onDoNavigation={(section) => this.setSection(section)}
            portfolio = {this.props.portfolio}/>
        </div>
      </div>
    )
  }
}

export default ColumnRight;
