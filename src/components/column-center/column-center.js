import React from 'react';
import ContentBlock from './content.js';
import ImageBlock from './image.js';
import TextBlock from './textBlock.js';

import './column-center.css';

class ColumnCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      index: '0'
    }
  }

  OpenTextBlock = () =>{
    this.setState({
      open: !this.state.open
    });
  }

  nextImage = (index)  =>{
    this.setState({
      index: index
    })
  }

  render(){
    let textBlockClass = ['text-block-section'];

    if(this.state.open){
      textBlockClass.push('open');
    }
    if(this.props.onMove != "") {
      if(this.state.open){
        textBlockClass = ['text-block-section'];
      }
    }

    return (
      <div>
        <div className="content-block">
          <ContentBlock
            move={this.props.onMove}
            img={this.props.image}
            index={this.state.index}
          />
          <ImageBlock
            move={this.props.onMove}
            img={this.props.image}
          />
        </div>
        <div className="titel-block" >
          <TextBlock
            title={this.props.title}
            img={this.props.image.length}
            onNextImageClick = {(index) => this.nextImage(index)}
          />
        </div>
        <div>
          <div className="content-text-block" onClick={this.OpenTextBlock}></div>
          <section className={textBlockClass.join(' ')}>
            <p>
              {this.props.text}
            </p>
            <p className="strong">
              {this.props.tags}<br />
              <i>{this.props.link}</i>
            </p>
          </section>
        </div>
      </div>
    )
  }
}

export default ColumnCenter;
