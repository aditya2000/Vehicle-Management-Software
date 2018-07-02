import React, { Component } from 'react';
import ButtonAppBar from '../appbar/appbar';
import FloatingActionButtons from '../fabButtons/fabButton';
import DashCard from '../dashCards/dashCards';
import Grid from '@material-ui/core/Grid';
import Order from '../order/order';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const DashBoard = ({match}) => {

  const items = [
      {vehNum:1, driverName:'Driver Name1', driverNum:'Driver Number1', orders:[1, 2, 3]},
      {vehNum:2, driverName:'Driver Name2', driverNum:'Driver Number2', orders:[2, 3, 4]},
      {vehNum:3, driverName:'Driver Name3', driverNum:'Driver Number3', orders:[3, 4, 5]},
    ];
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
        <Route
        path={`${match.path}/:vehNum`}
        render={props => <Order data={items} {...props}/>}
      />
      </div>
    )
  }


export default DashBoard;
