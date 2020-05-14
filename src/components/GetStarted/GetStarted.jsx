import React from 'react';
import './GetStarted.css';
import { Typography, Button } from '@material-ui/core';
const GetStarted = () => {
  return (
    <div className="container">
      <Typography variant="h2">Get Started</Typography>
      <Typography variant="h6" gutterBottom={true}>
        Repairing in the San Francisco Bay Area
      </Typography>
      <Button variant="contained" size="large" color="primary">
        Repair now
      </Button>
    </div>
  );
};

export default GetStarted;
