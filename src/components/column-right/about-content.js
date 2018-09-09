import React from 'react';

import './column-right.css';

class AboutContent extends React.Component{
  render(){
    return(
      <div className="about-content">
        <h3>Brian Koudijs</h3>
        <p>
          My name is Brian and I am a web developer, UI/UX designer and graphic designer. I have a masters degree in Interaction Design from the Technical University in Delft (The Netherlands).
          <br/>
          I ran my own Graphic design and Webdevelopment company (Wåning:ett) for a few years after which I did a course in .Net programming. I have been working as a Front-end developer at Virtusa AB for the past 2,5 years.
        </p>
        <p className="strong">
          Photoshop | Illustrator | Indesign | Adobe XD | Premiere Pro | After Effects | Unity | HTML5 | CSS3 | JavaScript | JQuery | C# | .Net MVC | React
        </p>
        <div className="line"></div>
        <h3>Hello! Is it me you're looking for?</h3>
        <ul className="contact-list">
          <li>brian.koudijs@icloud.com</li>
        </ul>
      </div>
    )
  }
}

export default AboutContent
