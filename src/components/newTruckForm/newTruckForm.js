import React, { Component } from 'react';
import './newTruckForm.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class NewTruckForm extends Component {
  render() {
    return (
      <div className='truckForm'>
        <h1>Add New Vehicle</h1>
        <form name="newTruckForm">
            <FormControl fullWidth >
            <TextField id="driver-phone-number" label="Driver's Phone Number" margin="normal" name="driver-phone-number"/>
            </FormControl>

            <FormControl fullWidth >
            <TextField id="driver-name" label="Driver Name" margin="normal" name="driver-name"/>
            </FormControl>

            <TextField id="rate" label="Rate" margin="normal" name="rate"/>&nbsp;&nbsp;&nbsp;<TextField id="meals-tips" label="Meals & Tips" margin="normal" name="meal-tips"/>&nbsp;&nbsp;&nbsp;
            <TextField id="fuel" label="Fuel" margin="normal" name="fuel"/>&nbsp;&nbsp;&nbsp;<TextField id="advances" label="Advances" margin="normal" name="advances"/>&nbsp;&nbsp;&nbsp;

            <TextField id="maintainence-cost" label="Maintainence Cost" margin="normal" name="maintainence-cost"/>

            <FormControl fullWidth >
            <TextField id="fastag-number" label="Fastag Number" margin="normal" name="fastag-number"/>
            </FormControl>

            <div className='submitButton'>
            <Button variant="contained" color="primary" className='submitButton' value="send-new-truck">
              Submit
            </Button>
            </div>
        </form>
      </div>
    );
  }
}

export default NewTruckForm;
