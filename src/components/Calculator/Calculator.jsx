import React from 'react';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Grid,
  Select,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './Calculator.css';
import data from '../data.json';

const Calculator = () => {
  console.log();
  const manufacturers = Object.keys(data);
  let hello = '<h1>hello world</h1>';
  let query = '';
  const options = manufacturers.forEach((man) => {
    console.log(man);
    query += `<option value="${man}">${man}</option>`;
    return query;
  });
  console.log(query);
  const selectMan = (e) => {
    e.preventDefault();
    console.log('hello');
  };
  return (
    <div className="CalculatorContainer">
      <Container>
        <Typography variant="h2">Calculate Price</Typography>
        <div className="Calculator">
          <form action="">
            <Paper className="Paper">
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <FormControl>
                    <Select native id="manufacturer-list" onChange={selectMan}>
                      {query}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={6}>
                  <FormControl>
                    <Select native id="manufacturer-list" onChange={selectMan}>
                      {query}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item sm={6}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">First Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
                </Grid>
                <Grid item sm={6}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Last Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
                </Grid>

                <Grid item sm={6}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
                </Grid>
                <Grid item sm={6}>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Repair Address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
