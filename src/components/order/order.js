import React, { Component } from 'react';
import ButtonAppBar from '../appbar/appbar';
import FloatingActionButtons from '../fabButtons/fabButton';




const Order = ({ match, data }) => {
  var veh = data.find(v => v.vehNum === Number(match.params.vehNum));

return (<div>
    <ButtonAppBar color="secondary"/>
    <h1>Orders</h1>
    <h2>{veh.vehNum}</h2>
    <FloatingActionButtons color='secondary'/>
  </div>)
}

export default Order;
