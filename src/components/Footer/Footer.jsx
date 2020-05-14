import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core/';
import './Footer.css';
const Footer = () => {
  return (
    <div className="Footer">
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Typography variant="h4">
            <b>Ninja Repair</b>
          </Typography>
          <Typography variant="h5">Connect With Us</Typography>
          <Typography variant="subtitle">@ninjarepairsf</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h4">Common Devices</Typography>
          <ul>
            <li>iPhone 8 Plus</li>
            <li>iPhone XR</li>
            <li>iPhone X</li>
            <li>iPhone XS Max</li>
          </ul>
        </Grid>
      </Grid>
      <Typography variant="subtitle1">ninjarepair&copy; 2020</Typography>
    </div>
  );
};

export default Footer;
