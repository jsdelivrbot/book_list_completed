import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className = "list-group-item"
          key = {book.title}
          onClick = {() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    })
  }

  render() {
    return(
      <ul className = "list-group col-md-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever gets returned from here will show up as props in book-list
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props in the book-list
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all our reducers.
  return bindActionCreators({ selectBook : selectBook }, dispatch);
}

// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
