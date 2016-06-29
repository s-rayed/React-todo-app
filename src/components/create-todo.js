import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class CreateTodo extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="what do i need to do?" ref="createInput" />
        <button>Create</button>
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();
    
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

}