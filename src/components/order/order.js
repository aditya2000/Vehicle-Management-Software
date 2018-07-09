import React, { Component } from 'react';
import ButtonAppBar from '../appbar/appbar';
import FloatingActionButtons from '../fabButtons/fabButton';
import Button from '@material-ui/core/Button';
import OrderDialog from './orderDialog.js';
import './order.css';

import { connect } from 'react-redux';
import { getItems } from '../../actions/itemActions';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Order extends Component{
  //var veh = data.find(v => v.vehNum === Number(match.params.vehNum));

  componentDidMount() {
    this.props.getItems();
  }

  render(){
    const {items} = this.props.item;
    var veh = items.find(v => v.vehNum === Number(this.props.vehiclenumber));
    return (<div className='vehicle-orders'>
    <ButtonAppBar color="secondary"/>
    <div className="details">
      <h1>Vehicle-{veh.vehiclenumber}</h1>
      <h2>{veh.drivername}</h2>
      <h2>{veh.driverphonenumber}</h2>
      <Paper className='order-table'>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell>More Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { veh.orders.map(order =>
              <TableRow key={veh.id}>
                <TableCell>
                  {order.orderId}
                </TableCell>
                <TableCell>
                  <OrderDialog order={order} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div>
    <FloatingActionButtons color='secondary'/>
  </div>);
  }
}

Order.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})


export default connect(mapStateToProps, {getItems})(Order);
