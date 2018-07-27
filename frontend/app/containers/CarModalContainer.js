import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddCarForm from '../components/AddCarForm';
import { addNewCar } from '../actions/cars';

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
    e.preventDefault();
    this.close();

    const newState = {...this.state};
    delete newState.modal;

    this.props.addCar(newState)
      .then(res => {
        if (res.success) {
          console.log("success");
        }
      })
  }

  render() {
    return (
      <div>
        <div className='modal-icon' onClick={this.toggle}>
          <i className='fa fa-plus fa-fw'></i>
          <span>Add New Car</span>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Create New Car</ModalHeader>
          <ModalBody>
            <AddCarForm handleInput={this.handleInput} />
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

function mapDispatchToProps(dispatch) {
  return {
    addCar: (car) => {
      return dispatch(addNewCar(car));
    }
  }
}

export default connect(null, mapDispatchToProps)(CarModalContainer);
