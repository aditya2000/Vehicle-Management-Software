import React, { Component } from 'react';
import ButtonAppBar from '../appbar/appbar';
import FloatingActionButtons from '../fabButtons/fabButton';
import DashCard from '../dashCards/dashCards';
import Grid from '@material-ui/core/Grid';
import Order from '../order/order';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemActions';
import PropTypes from 'prop-types';

class DashBoard extends Component{

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

 render() {
    const {items} = this.props.item;
    return (
      <div>
        <ButtonAppBar color="primary"/>
        <h1>Dashboard</h1>
        <FloatingActionButtons color="primary"/>
        <Grid container>
          {items.map((item) =>(
            <Grid item xs={6} sm={3} key={item._id}>
              <DashCard data={item} />
              <Button variant="outlined" color="secondary" className='submitButton' onClick={this.onDeleteClick.bind(this, item._id)}>
                Delete
              </Button>
            </Grid>)
        )}
        </Grid>

      </div>
    )}
  }

DashBoard.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(DashBoard);
