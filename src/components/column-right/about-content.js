import React from 'react';

import './column-right.css';

class AboutContent extends React.Component{
  render(){
    return(
      <div className="about-content">
        <h3>Brian Koudijs</h3>
        <p>
          My name is Brian and I am a web developer, UI/UX designer and graphic designer. I have a masters degree in Interaction Design from the Technical University in Delft (The Netherlands).
        </p>
        <p className="strong">
          Photoshop | Illustrator | Indesign | Adobe XD | Premiere Pro | After Effects | Unity | HTML5 | CSS3 | JavaScript | JQuery | C# | .Net MVC | React
        </p>
        <div className="line"></div>
        <h3>Drop a line</h3>
        <ul className="contact-list">
          <li>Email: brian.koudijs@icloud.com</li>
        </ul>
      </div>
    )
  }
}

export default AboutContent