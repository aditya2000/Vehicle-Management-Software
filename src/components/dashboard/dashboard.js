import React, { Component } from 'react';
import ButtonAppBar from '../appbar/appbar';
import FloatingActionButtons from '../fabButtons/fabButton';
import DashCard from '../dashCards/dashCards';
import Grid from '@material-ui/core/Grid';
import Order from '../order/order';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const DashBoard = ({match, data}) => {

  const items = data;
    return (
      <div>
        <ButtonAppBar color="primary"/>
        <h1>Dashboard</h1>
        <FloatingActionButtons color="primary"/>
        <Grid container>
          {items.map((item) =>(<Grid item xs={6} sm={3} key={item.vehNum}>
            <DashCard data={item}/>

          </Grid>)
        )}
        </Grid>

      </div>
    )
  }


export default DashBoard;
