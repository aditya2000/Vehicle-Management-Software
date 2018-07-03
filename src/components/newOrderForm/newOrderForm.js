import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import './newOrderForm.css';


class NewOrderForm extends Component {
  render() {
    return (
      <div className="orderForm">
      <h1>Add New Order</h1>
      <form>
          <FormControl fullWidth >
          <TextField id="order-id" label="Order Id" margin="normal"/>
          </FormControl>

          <TextField id="creaser-name" label="Creaser Name" margin="normal"/>&nbsp;&nbsp;&nbsp;<TextField id="fuel-vendor" label="Fuel Vendor" margin="normal"/>&nbsp;&nbsp;&nbsp;

          <TextField id="rate" label="Rate" margin="normal"/>&nbsp;&nbsp;&nbsp;<TextField id="start-kms" label="Start Kms" margin="normal"/>&nbsp;&nbsp;&nbsp;
          <TextField id="end-km" label="End Km" margin="normal"/>&nbsp;&nbsp;&nbsp;<TextField id="weight" label="Weight" margin="normal"/>&nbsp;&nbsp;&nbsp;

          <TextField id="trip-kms" label="Trip Kms" margin="normal"/>&nbsp;&nbsp;&nbsp;

          <TextField id="trip-hrs" label="Trip Hrs" margin="normal"/>&nbsp;&nbsp;&nbsp;<TextField id="fuel-lts" label="Fuel lts" margin="normal"/>&nbsp;&nbsp;&nbsp;
          <TextField id="fuel-rate" label="Fuel Rate" margin="normal"/>&nbsp;&nbsp;&nbsp;<TextField id="revenue" label="Revenue" margin="normal"/>

          <div className='submitButton'>
          <Button variant="contained" color="secondary" className='submitButton'>
            Submit
          </Button>
          </div>
      </form>
      </div>
    );
  }
}

export default NewOrderForm;
