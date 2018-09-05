import React from 'react';
import Navigation from './navigation';
import PropTypes from 'prop-types';

import './column-left.css';

class ColumnRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  OpenTextBlock = () =>{
    this.setState({
      open: !this.state.open
    });
  }

  onPrevious = () => {
    if(this.props.onMove == "prev"){
      return
    }
    else if(this.props.onMove == ""){
      this.props.onPreviousClick()
    }
  }

  setSection = (section) => {
    this.props.onSetSection(section)
  }

  render(){
    let prevClass = ["previous-block-image"];
    let imgClass = ["previous-image"];
    let textBlockClass = ['text-block-section'];

    if(this.state.open){
      textBlockClass.push('open');
    }

    if(this.props.onMove == "next") {
      prevClass.push('transNext show');
      imgClass.push('none');
      if(this.state.open){
        textBlockClass = ['text-block-section'];
      }
    }else if(this.props.onMove == "prev"){
      prevClass.push('transPrev show');
      imgClass.push('none');
      if(this.state.open){
        textBlockClass = ['text-block-section'];
      }
    }

    return (
      <div>
        <div className="previous-block" onClick={this.onPrevious}>
          <img className={imgClass.join(' ')} src={require(`../../images/${this.props.image.url}`)} alt={this.props.image.alt} />
          <div className={prevClass.join(' ')}>
            <img src={require(`../../images/${this.props.image.url}`)} alt={this.props.image.alt} />
          </div>
        </div>
        <div>
          <div className="content-text-block" onClick={this.OpenTextBlock}></div>
          <section className={textBlockClass.join(' ')}>
            <p>
              {this.props.text}
            </p>
          </section>
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
