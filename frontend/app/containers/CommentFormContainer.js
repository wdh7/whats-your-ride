import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';
import CommentForm from '../components/CommentForm';
import { submitComment } from '../actions/car';

class CommentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      comment: ''
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    this.props.submitComment(this.state.comment, this.props.carId);
  }

  render() {
    return (
      <section>
        <div>
          <span onClick={this.toggle} className='collapse-icon'>
            <i className='fa fa-plus fa-fw'></i>
            Add comment
          </span>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <CommentForm handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
        </Collapse>
      </section>
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
    submitComment: (comment, carId) => {
      return dispatch(submitComment(comment, carId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer);
