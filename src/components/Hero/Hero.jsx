import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './Hero.css';
import Typography from '@material-ui/core/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';
const Hero = () => {
  return (
    <div className="hero-bg">
      <Container>
        <Typography variant="h2">Phone</Typography>
        <Typography variant="h3">
          <b>Repair</b>
        </Typography>
        <Typography variant="h5" id="subtitle" gutterBottom={true}>
          at your door, within same hour
        </Typography>
        <Button color="primary" size="large" variant="contained">
          Repair Now
        </Button>
        {/* <Carousel>
          <div className="card">
            <img src="https://i.postimg.cc/RVVgX1nN/undraw-online-calendar-kvu2.png" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}
      </Container>
    </div>
  );
};
export default Hero;
