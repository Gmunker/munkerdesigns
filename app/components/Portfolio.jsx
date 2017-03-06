import React from 'react';
import {Grid, Col} from 'react-bootstrap';


export class Portfolio extends React.Component {
  render() {
    return (
     <div className="portfolio-div">
        
        <Col md={2} lg={2} className="section-header">
          <h1 className="visible-md-block visible-lg-block" >Portfolio</h1>
        </Col>
        <Grid className="portfolio-grid">
        
          <Col md={11} lg={10} lgOffset={2}>    
          <p>Currently I am training full-time to become a Full-Stack Front-End Developer. I can say with confidence right now that I am a Front-End Developer with knowledge in HTML, CSS, Bootstrap, Javascript, and jQuery as well other Javascript libraries. </p>
          <p>I started web developing back in the early 90’s when HTML2 became popular, and it didn’t take much time for me to get board at that time. I was young and there were too many moving parts around me. I eventually ended up going back to school for automotive, and worked in that field for many years. In 2008 I was injured in work preventing me from doing much for a while. After I knew it my fiancé and I were having our first child...</p>
          <p>The whole being a stay at home parent thing is no joke, I thought I would have been able to do so much more, which was and is still not the case. Now on our second child, I am experienced! I carve out the time needed to work towards my goals for becoming a Front-End Developer. There have been many challenges along the way, but I will work through every one of them both in my personal life, and the code that I write. </p>
          <p>Please enjoy my personal website, as I hope it reflects the person and programmer that I am. </p>
        </Col>
             
        </Grid>


      </div> 
    )
  }
}

module.exports = Portfolio