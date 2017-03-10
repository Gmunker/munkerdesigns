import React from 'react';
import {
  Grid,
  Col,
  FormControl,
  FormGroup,
  Checkbox,
  Radio,
  ControlLabel,
  Button,
  HelpBlock
} from 'react-bootstrap';

import {Link} from 'react-router';

export class Contact extends React.Component {
  render() {
    function FieldGroup({
      id,
      label,
      help,
      ...props
    }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props}/> {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
    }
    return (

      <div className="container-fluid">
        <Grid id="border">

          <div className="about-div">

            <Col md={2} lg={2} id="about-section-header" className="section-header">
              <h1 className="visible-md-block visible-lg-block">Contact</h1>
            </Col>

            <div className="about-info">
              <Col lg={8} lgOffset={3}>
              <Link to="/">Home</Link>
                <form>
                  <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter text"/>
                  <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    label="Email address"
                    placeholder="Enter email"/>
                  
                  <FieldGroup
                    id="formControlsFile"
                    type="file"
                    label="File"
                    help="Example block-level help text here."/>

                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="select">select</option>
                      <option value="other">Website</option>
                      <option value="other">Web App</option>
                      <option value="other">Maintaince</option>
                      <option value="other">Upgrade/Update Current Code</option>
                      <option value="other">Other...</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea"/>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Static text</ControlLabel>
                    <FormControl.Static>
                      email@example.com
                    </FormControl.Static>
                  </FormGroup>

                  <Button type="submit">
                    Submit
                  </Button>
                </form>
              </Col>

            </div>
          </div>
        </Grid>

        <div id="bottom-bar">
          <div id="green"></div>
          <div id="grey"></div>
        </div>

      </div>

    )
  }
}

module.exports = Contact