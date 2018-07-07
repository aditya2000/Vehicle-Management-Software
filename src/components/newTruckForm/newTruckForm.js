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
            <TextField id="vehicle-number" label="Vehicle Number" margin="normal" name="vehicle-number"/>
            </FormControl>

            <FormControl fullWidth >
            <TextField id="driver-name" label="Driver Name" margin="normal" name="driver-name"/>
            </FormControl>

            <FormControl fullWidth >
            <TextField id="driver-phone-number" label="Driver's Phone Number" margin="normal" name="driver-phone-number"/>
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
