import React from 'react';

import {Grid} from 'react-bootstrap'

export class Contact extends React.Component {
  render() {
    function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
    return (
     <div className="contact-div">
        <div className="section-header">
          <h1 className="visible-md-block visible-lg-block" >Contact</h1>
        </div>
     
        <Grid>
          <p>Gmunker@GregMunker.com</p>
          <p>Maricopa, AZ</p>
        </Grid>
      </div> 
    
    )
  }
}

module.exports = Contact