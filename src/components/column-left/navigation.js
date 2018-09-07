import React from 'react';

import './column-left.css';

class Navigation extends React.Component {
  doNavigation = (section) =>{
    this.props.onDoNavigation(section)
  }

  render(){
    let Portfolio = this.props.portfolio;
    let graphic = ['graphic'];
    let webb = ['webb'];

    if(Portfolio === "Portfolio"){
      graphic.push('current');
    }else if(Portfolio === "Webb"){
      webb.push('current');
    }

    return (
      <nav>
        <ul className="nav-list">
          <li onClick={() => this.doNavigation("Portfolio")}>
            <h2 className={graphic.join(' ')}>Graphic Design</h2>
          </li>
          <li onClick={() => this.doNavigation("Webb")}>
            <h2 className={webb.join(' ')}>Web Design</h2>
          </li>
          <li onClick={() => this.doNavigation("About")}>
            <h2>About</h2>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
