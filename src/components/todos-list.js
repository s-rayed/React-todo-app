import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {

  renderItems() {

    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...this.props} />)
  }

  // above is es6 syntax for --- function(todo, index) {
    // return <TodosListItem />
  // }
  // and the {...todo} is es6 syntax for ---
  // task={todo.task} isCompleted={todo.isCompleted}

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}