import React from 'react';
import {Jumbotron, Button, Image, Grid, Row, Col} from 'react-bootstrap';

export class Home extends React.Component {
  
  render() {

    return (
      <div className="home-div container-fluid">
        <div id="home-border"></div>
        <div id="cogs-div"><img id='cogs-img' src={require('../images/cogs.jpg')} />></div>

        <div id="main-sum-loc">
          <h3 id="main-summary" class="siteGrey">Web Development & Design</h3>
          <h3 id="main-location" class="siteGrey">Maricopa, AZ</h3>
        </div>

        <div id="main-phone">
          <h2 class="siteGreen">520.261.3331</h2>
        </div>

        <div id="main-company-name">
          <h1 class="siteGreen col-lg-8">MunkerDesigns.com</h1>
        </div>

        <div id="main-basic-info">
          <h4 id="main-name" class="siteGrey">Greg Munker</h4>
          <h4 id="main-title" class="siteGrey">Freelance Web Designer</h4>
          <h4 id="main-email" class="siteGrey">Gmunker@MunkerDesigns.com</h4>
        </div>  


      </div>
    )  
  }
}

module.exports = Home;