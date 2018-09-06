import React from 'react';

import './column-center.css';

class ContentBlock extends React.Component {
  list(image){
    let imgClass = [''] ;
    const children = (items) => {
      if(items){
        return <ul>{this.list(items)}</ul>
      }
    }
    return image.map((node, index) => {
      if(this.props.index == index){
        imgClass = ['currentImg']
      }else{
        imgClass = ['']
      }
      if(this.props.move != "") {
        imgClass = ['none']
      }
      return <img className={imgClass} src={require(`../../images/${node.url}`)} alt={node.alt} key={index} />
    })
  }
  render(){
    return (
      <div className="content-block-center">
        <div>
          { this.list(this.props.img) }
        </div>
      </div>
    )
  }
}

export default ContentBlock;
