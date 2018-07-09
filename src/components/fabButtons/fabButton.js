import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewTruckForm from '../newTruckForm/newTruckForm';
import NewOrderForm from '../newOrderForm/newOrderForm';

import './fabButton.css';



/*function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    height: 'auto',
    width: 'auto',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    borderRadius: '5px',
  },
});*/


class FloatingButtons extends Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
 render() {
   const { classes } = this.props;
   return (
      <div className="button">

        <Button variant="fab" color={this.props.color} aria-label="add" onClick={this.handleClickOpen('paper')}>
          +
        </Button>
        <Dialog
     open={this.state.open}
     onClose={this.handleClose}
     scroll={this.state.scroll}
     aria-labelledby="scroll-dialog-title"
   >
     <DialogContent>
       <DialogContentText>
          {this.props.color === 'secondary'? (<NewOrderForm />) : (<NewTruckForm />)}
       </DialogContentText>
     </DialogContent>
     <DialogActions>
       <Button onClick={this.handleClose}color="primary">
        Close
       </Button>
     </DialogActions>
     </Dialog>
       </div>

    );
  }
}

/*FloatingButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

const FloatingActionButtons = FloatingButtons;

export default FloatingActionButtons;
