import React from 'react';

import './column-right.css';

class AboutContent extends React.Component{
  render(){
    return(
      <div className="about-content">
        <h3>Brian Koudijs</h3>
        <p>Short description</p>
        <div className="line"></div>
        <h3>Contact</h3>
        <ul className="contact-list">
          <li><span>Email: </span>brian.koudijs@icloud.com</li>
          <li><span>Telephone: </span>+46 (0)730 94 00 00</li>
        </ul>
      </div>
    )
  }
}

export default AboutContent
