import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  FormHelperText,
  Input,
  Grid,
  Select,
  Button,
  MenuItem,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './Calculator.css';
import data from '../data.json';
import { grid } from '@material-ui/system';

const Calculator = () => {
  const manufacturers = Object.keys(data);
  const [man, setMan] = useState('android');
  const [model, setModel] = useState(null);
  const [issue, setIssue] = useState(null);
  let hello = '<h1>hello world</h1>';
  const options = manufacturers.map((man) => {
    console.log(man);
    return (
      <option key={man} value={man}>
        {man}
      </option>
    );
  });
  console.log(options);
  const models = Object.keys(data[man]);
  const modelList = models.map((model) => {
    return (
      <option key={model} value={model}>
        {model}
      </option>
    );
  });
  let issueList = [];
  if (model !== null) {
    const issues = Object.keys(data[man][model]);
    issueList = issues.map((issue) => {
      return (
        <option key={issue} value={issue}>
          {issue}
        </option>
      );
    });
  }

  const selectMan = (e) => {
    e.preventDefault();
    setMan(e.target.value);
    setModel(null);
    console.log(e.target.value);
  };
  const selectModel = (e) => {
    e.preventDefault();
    setModel(e.target.value);
  };
  const selectIssue = (e) => {
    e.preventDefault();
    setIssue(e.target.value);
  };
  let prices = '$0.';
  if (man !== null && model !== null && issue !== null) {
    prices = Object.values(data[man][model][issue]);
    prices = prices.map((price) => {
      return <Typography>{price}</Typography>;
    });
  }

  return (
    <div className="CalculatorContainer">
      <Container>
        <Typography variant="h2">Calculate Price</Typography>

        <div className="Calculator">
          <form action="https://formspree.io/xdowkrnq" method="POST">
            <Paper className="Paper">
              <Grid container spacing={3} alignContent="center">
                <Grid item alignContent="center" sm={12}>
                  <div className="image">
                    <img
                      width="90"
                      src="https://i.postimg.cc/J09ysDt3/iphonesamsung.png"
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item sm={12}>
                  {prices}
                </Grid>
                <Grid item sm={4}>
                  <FormControl>
                    <Select
                      native
                      id="manufacturer-list"
                      onChange={selectMan}
                      value={man}
                    >
                      {options}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={4}>
                  <FormControl>
                    <Select
                      native
                      id="manufacturer-list"
                      onChange={selectModel}
                    >
                      {modelList}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={4}>
                  <FormControl>
                    <Select
                      native
                      id="manufacturer-list"
                      onChange={selectIssue}
                    >
                      {issueList}
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

                <Grid item sm={12}>
                  <Button
                    className="submitBtn"
                    color="secondary"
                    size="large"
                    variant="contained"
                  >
                    Submit
                  </Button>
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
