import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './Hero.css';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

const Hero = () => {
  return (
    <div className="hero-bg">
      <Container>
        <Typography variant="h2">Phone</Typography>
        <Typography variant="h3">Repair</Typography>
        <Typography variant="h5" id="subtitle">
          at your door, within same hour
        </Typography>
        <Button color="primary" variant="contained">
          Repair Now
        </Button>
      </Container>
    </div>
  );
};
export default Hero;
