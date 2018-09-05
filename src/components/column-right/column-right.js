import React from 'react';
import AboutContent from './about-content'
import './column-right.css';

class ColumnRight extends React.Component {
  onNext = () => {
    if(this.props.onMove == "next"){
      return
    }else if(this.props.onMove == ""){
      this.props.onNextClick()
    }
  }

  render(){
    let boxClass = ["next-block-image"];
    let nextClass = ["next-block-next"];
    let imageClass = ["next-image"];
    let aboutClass = ["about-contact-block-content"];

    if(this.props.onMove == "next"){
      boxClass.push('transNext show');
      nextClass.push('transNext show');
      imageClass.push('none');
    }else if(this.props.onMove == "prev"){
      boxClass.push('transPrev show');
      nextClass.push('transPrev ');
      imageClass.push('none');
    }

    if(this.props.section != ""){
      aboutClass.push('open');
    }else{
      aboutClass.push('close');
    }

    return (
      <div>
        <div className="about-contact-block">
          <div className={aboutClass.join(' ')}>
            <AboutContent />
          </div>
        </div>
        <div className="next-block" onClick={this.onNext}>
          <img className={imageClass.join(' ')} src={require(`../../images/${this.props.image.url}`)} alt={this.props.image.alt} />
          <div className={boxClass.join(' ')}>
            <img src={require(`../../images/${this.props.image.url}`)} alt={this.props.image.alt} />
          </div>
        </div>
      </div>
    )
  }
}

export default ColumnRight;
