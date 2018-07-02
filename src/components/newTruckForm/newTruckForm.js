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
        <form>
            <FormControl fullWidth >
            <TextField id="driver-phone-number" label="Driver's Phone Number" margin="normal"/>
            </FormControl>

            <FormControl fullWidth >
            <TextField id="driver-name" label="Driver Name" margin="normal"/>
            </FormControl>

            <TextField id="rate" label="Rate" margin="normal"/>&nbsp;&nbsp;&nbsp;<TextField id="meals-tips" label="Meals & Tips" margin="normal"/>&nbsp;&nbsp;&nbsp;
            <TextField id="fuel" label="Fuel" margin="normal"/>&nbsp;&nbsp;&nbsp;<TextField id="advances" label="Advances" margin="normal"/>&nbsp;&nbsp;&nbsp;

            <TextField id="maintainence-cost" label="Maintainence Cost" margin="normal"/>

            <FormControl fullWidth >
            <TextField id="fastag-number" label="Fastag Number" margin="normal"/>
            </FormControl>

            <div className='submitButton'>
            <Button variant="contained" color="primary" className='submitButton'>
              Submit
            </Button>
            </div>
        </form>
      </div>
    );
  }
}

export default NewTruckForm;
