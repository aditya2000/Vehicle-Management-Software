import React, { Component } from 'react';
import './newTruckForm.css';
import MaterialUIForm from 'material-ui-form';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addItem } from '../../actions/itemActions';


class NewTruckForm extends Component {
  state = {
    vehiclenumber: null,
    drivername: '',
    driverphonenumber: null,
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      vehiclenumber: this.state.vehiclenumber,
      drivername: this.state.drivername,
      driverphonenumber: this.state.driverphonenumber,
      orders: []
    }
    //Adding Item via addItem action
    this.props.addItem(newItem);
  }

  render() {
    return (
      <div className='truckForm'>
        <MaterialUIForm onSubmit={this.onSubmit}>
          <h1>Add New Vehicle</h1>
            <FormControl fullWidth >
            <TextField  label="Vehicle Number" margin="normal" name="vehiclenumber" onChange={this.onChange}/>
            </FormControl>

            <FormControl fullWidth >
            <TextField  label="Driver Name" margin="normal" name="drivername" onChange={this.onChange}/>
            </FormControl>

            <FormControl fullWidth >
            <TextField  label="Driver's Phone Number" margin="normal" name="driverphonenumber" onChange={this.onChange}/>
            </FormControl>

            <Button variant="contained" color="primary" className='submitButton' type='submit' onClick={this.onSubmit}>
              Submit
            </Button>
        </MaterialUIForm>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, {addItem})(NewTruckForm);
