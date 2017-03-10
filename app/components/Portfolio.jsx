import React from 'react';
import {Grid, Col} from 'react-bootstrap';
import {Link} from 'react-router';



export class Portfolio extends React.Component {
  render() {
    return (
     <div className="container-fluid">
        <Grid id="border">

          <div className="about-div">

            <Col md={2} lg={2} id="about-section-header" className="section-header">
              <h1 className="visible-md-block visible-lg-block">Portfolio</h1>
            </Col>

            <div className="about-info">
              <Col lg={8} lgOffset={3}>
                <Link to="/">Home</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien
                  purus, faucibus quis facilisis vel, efficitur ut est. Vestibulum fringilla nulla
                  egestas tincidunt condimentum. Proin rutrum elit tortor, id facilisis nisl
                  vulputate in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  porttitor turpis lacus. Mauris feugiat sapien orci, et iaculis elit luctus non.
                  Cras ornare pretium ipsum at tristique. Etiam ornare lectus erat, in viverra
                  nulla commodo ut. Etiam ultrices consequat tincidunt. Nunc elementum, dolor ut
                  efficitur malesuada, lectus ipsum semper lacus, sed fermentum libero eros
                  volutpat lacus. Quisque lobortis dictum tincidunt. Sed justo lacus, consequat
                  non varius vel, facilisis ut augue. Maecenas velit dui, ultricies eu nisi at,
                  tristique porta magna.
                </p>
                <p>
                  Sed in condimentum lacus, at egestas turpis. Ut ut arcu porta purus placerat
                  gravida. Donec vitae ipsum feugiat, vestibulum nunc sit amet, feugiat ipsum.
                  Mauris lacinia lectus eget felis feugiat lobortis. Aenean nibh nulla, malesuada
                  sed nisl nec, malesuada pellentesque dui. Nunc vehicula tortor elit. Nulla
                  facilisis porttitor luctus.
                </p>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce rutrum nisl
                  urna, ut faucibus nisl mattis sed. Cras lectus erat, dignissim et augue ut,
                  commodo elementum leo. In tristique molestie vestibulum. Fusce porttitor urna
                  magna, ut placerat nunc dignissim finibus. Donec vitae sapien aliquam, bibendum
                  justo in, viverra nisi. In hac habitasse platea dictumst. Nulla mauris ipsum,
                  venenatis bibendum dui sed, euismod venenatis magna. Morbi congue, libero a
                  posuere finibus, lorem tellus placerat nisl, vitae auctor libero arcu vitae
                  eros. Aliquam pellentesque lacus non nulla rhoncus, in luctus ligula venenatis.
                  Etiam nec elit lacinia, pharetra mauris eget, pulvinar nunc. Sed dapibus sit
                  amet turpis vel luctus. Pellentesque sollicitudin auctor leo.
                </p>
                <p>
                  Sed laoreet quis nunc eget placerat. Donec suscipit bibendum diam, quis volutpat
                  odio ullamcorper ut. Etiam a volutpat purus. Maecenas auctor libero non tortor
                  elementum, sit amet vehicula quam maximus. Phasellus ut nunc quam. Nunc euismod
                  cursus metus, et pretium enim porta consectetur. Nunc nulla metus, aliquam vel
                  quam vel, volutpat luctus orci. Etiam dictum sem eget dictum hendrerit. In quis
                  mi et mauris suscipit imperdiet venenatis eu nunc. Quisque a urna leo. Etiam
                  viverra, eros eu congue faucibus, arcu elit interdum turpis, non ornare tortor
                  ligula iaculis diam. In rhoncus nulla iaculis est consequat sollicitudin.
                </p>
                <p>
                  Ut vitae massa sodales, pretium ipsum id, mattis sem. Nam non quam ante. Nullam
                  congue ex quis posuere tempus. Donec in purus lectus. Sed finibus eget ante ut
                  sollicitudin. Nam sit amet lectus lacus. Nunc fringilla cursus iaculis. Maecenas
                  consequat imperdiet elit, ac luctus urna bibendum a. Vestibulum non dui quis ex
                  accumsan porttitor. Duis non diam eget lacus ultricies volutpat. Nunc aliquet
                  mollis pellentesque. Suspendisse luctus arcu metus, sit amet laoreet erat
                  pellentesque sit amet. Maecenas non ipsum at lacus eleifend vulputate. Etiam vel
                  felis eget turpis mollis dictum.
                </p>
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

module.exports = Portfolio