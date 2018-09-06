import React from "react";
import ColumnLeft from '../column-left/column-left';
import ColumnCenter from  '../column-center/column-center';
import ColumnRight from '../column-right/column-right';
import ColumnRightCorner from '../column-right/column-corner';
import ColumnLeftCorner from '../column-left/column-corner';

import Portfolio from '../../api/portfolio';
import Webb from '../../api/webb';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: "",
      image: 0,
      portfolio: "Portfolio",
      section: ""
    }
  }

  setGlobalSection = (section) => {
    if(section == "Portfolio" || section == "Webb"){
      this.setState({
        portfolio: section,
        section: ""
      })
    }else{
      this.setState({
        section: section
      })
    }
  }

  getPortfolio = () => {
    let portfolio;
    if(this.state.portfolio == "Portfolio"){
      portfolio = Portfolio.getAll();
    }else if(this.state.portfolio == "Webb"){
      portfolio = Webb.getAll();
    }
    return portfolio;
  }

  setDirection = () => {
    let setPortfolio = this.getPortfolio().length;

    let indexNext = this.state.image + 1;
    let indexNextCorner = indexNext + 1
    let indexPrev = this.state.image - 1;
    let indexPrevCorner = indexPrev - 1;

    switch(this.state.image){
      case setPortfolio - 1:
        return [0, 1, indexPrev, indexPrevCorner]
      case setPortfolio - 2:
        return [indexNext, 0, indexPrev, indexPrevCorner]
      case 0:
        return [indexNext, indexNextCorner, setPortfolio - 1, indexPrev - 1]
      case 1:
        return [indexNext, indexNextCorner, indexPrev, setPortfolio - 1]
      default:
        return [indexNext, indexNextCorner, indexPrev, indexPrevCorner]
    }
  }

  addClass = (dir) => {
    this.setState({
      addClass: dir
    });

    setTimeout(() => {
      if(dir == "next"){
        if(this.state.image == this.getPortfolio().length - 1){
          this.setState({
            image : 0
          })
        }else{
          this.setState({
            image: this.state.image + 1
          })
        }
      }

      if(dir == "prev"){
        if(this.state.image == 0){
          this.setState({
            image : this.getPortfolio().length - 1
          })
        }else{
          this.setState({
            image: this.state.image - 1
          })
        }
      }
      this.setState({
        addClass: ""
      })
    }, 1000);
  }

  render() {
    return (
      <div className="body-content">
        <div className="left-column">
          {this.getPortfolio().map((port, index) => {
            if(this.setDirection()[2] == index){
              return(<ColumnLeft
                onPreviousClick={() => this.addClass("prev")}
                onMove={this.state.addClass}
                image = {port.image}
                text = {port.description}
                onSetSection={(section) => this.setGlobalSection(section)}
                portfolio = {this.state.portfolio}
              />)
            }
          })}
          {this.getPortfolio().map((port, index) => {
            if(this.setDirection()[3] == index){
              return(<ColumnLeftCorner
                onPrevClick={() => this.addClass("next")}
                onMove={this.state.addClass}
                image = {port.image}
              />)
            }
          })}
        </div>
        <div className="center-column">
          {this.getPortfolio().map((port, index) => {
            if(this.state.image == index){
              return(<ColumnCenter
                key={index}
                id={port.id}
                title={port.title}
                description = {port.description}
                image = {port.image}
                onMove = {this.state.addClass}
              />)
            }
          })}
        </div>
        <div className="right-column">
          {this.getPortfolio().map((port, index) => {
            if(this.setDirection()[0] == index){
              return(<ColumnRight
                onNextClick={() => this.addClass("next")}
                onMove={this.state.addClass}
                image = {port.image}
                section = {this.state.section}
              />)
            }
          })}
          {this.getPortfolio().map((port, index) => {
            if(this.setDirection()[1] == index){
              return(<ColumnRightCorner
                onNextClick={() => this.addClass("next")}
                onMove={this.state.addClass}
                image = {port.image}
              />)
            }
          })}
        </div>
      </div>
    )
  }
}

export default App
