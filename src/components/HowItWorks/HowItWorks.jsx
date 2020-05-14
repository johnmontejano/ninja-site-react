import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import './HowItWorks.css';
const HowItWorks = () => {
  return (
    <div className="MainContainer">
      <Container>
        <Typography variant="h2">How it works</Typography>
        <Grid container spacing={3} alignContent="center">
          <Grid item sm={4}>
            <img
              src="https://i.postimg.cc/3NNb4KKK/undraw-Calculator-0evy.png"
              alt=""
              width="80%"
            />
            <Typography variant="h2">Step 1</Typography>
          </Grid>
          <Grid item sm={4}>
            <img
              src="https://i.postimg.cc/RVVgX1nN/undraw-online-calendar-kvu2.png"
              width="100%"
            />
            <Typography variant="h2">Step 2</Typography>
          </Grid>
          <Grid item sm={4}>
            <img
              src="https://i.postimg.cc/x8tDB0RH/undraw-chore-list-iof3.png"
              width="90%"
            />
            <Typography variant="h2">Step 3</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HowItWorks;
