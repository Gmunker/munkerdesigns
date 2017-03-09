import React from 'react';
import {Jumbotron, Button, Image, Grid, Row, Col, ResponsiveEmbed} from 'react-bootstrap';
import {Link} from 'react-router';

export class Home extends React.Component {
  
  render() {

    return (
      <div className="home-div container-fluid">
        <Grid id="border">
          
            <Image responsive className='cogs-img' src={require('../images/cogs.jpg')} />

          <Col lg={8} md={8} sm={8} xs={8} id="main-sum-loc">
          <p>
            <h3 id="main-summary" class="siteGrey">Web Development & Design</h3>
            <h3 id="main-location" class="siteGrey">Maricopa, AZ</h3>
          </p>
          </Col>

          

          <Col xs={2} id="main-phone">
            <div><h2 class="siteGreen">520.261.3331</h2></div>
            <div><Link to="/about"><h4 id="main-name" class="siteGrey">Greg Munker</h4></Link></div>
            <div><h4 id="main-title" class="siteGrey">Freelance Web Designer</h4></div>
            <div><h4 id="main-email" class="siteGrey">Gmunker@MunkerDesigns.com</h4></div>
          </Col>

          <Col xsOffset={1} id="main-company-name">
            <h1 class="siteGreen col-lg-8">MunkerDesigns.com</h1>
          </Col>

          </Grid>
          <div id="bottom-bar">
            <div id="green"></div>
            <div id="grey"></div>
          </div>
        

      </div>
    )  
  }
}

module.exports = Home;