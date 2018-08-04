import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CarForm from '../components/CarForm';
import { addNewCar } from '../actions/cars';
import { editCar } from '../actions/car';
import { removeEmptyData } from '../helpers/removeEmptyData';

class CarModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      make: '',
      model: '',
      year: '',
      description: '',
      img: ''
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      make: '',
      model: '',
      year: '',
      description: '',
      img: ''
    });
  }

  close = () => {
    this.setState({
      modal: false
    })
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const { editCar, addCar, label, carId } = this.props;

    e.preventDefault();
    this.close();

    let newState = {...this.state};
    delete newState.modal;
    newState = removeEmptyData(newState);

    if (label === 'Edit Car') {
      editCar(newState, carId);
    } else if (label === 'Create New Car') {
      addCar(newState);
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.toggle}>
          {this.props.children}
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.label}</ModalHeader>
          <ModalBody>
            <CarForm handleInput={this.handleInput} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    carId: state.car.car._id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCar: (car) => {
      return dispatch(addNewCar(car));
    },
    editCar: (data, carId) => {
      dispatch(editCar(data, carId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarModalContainer);
