// TodosContainer.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';

class TodosContainer extends Component {
  componentDidMount() {
    // When container was mounted, we need to start fetching todos.
    this.props.fetchTodos();
  }

  render() {
    // In some simple cases, it is not necessary to create separate `Todos` component. You can put todos markup directly here.
    return <Todos items={this.props.todos} />
  }
}

// This function is used to convert redux global state to desired props.
function mapStateToProps(state) {
  // `state` variable contains whole redux state.
  return {
    // I assume, you have `todos` state variable.
    // Todos will be available in container component as `this.props.todos`
    todos: state.todos
  };
}

// This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // This function will be available in component as `this.props.fetchTodos`
    fetchTodos: function() {
      dispatch(fetchTodos());
    }
  };
}

// We are using `connect` function to wrap our component with special component, which will provide to container all needed data.
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);