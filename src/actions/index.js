export function selectBook(book) {
  //selectBook is an action creator that needs to return an action (object)
  return {
    type:'BOOK_SELECTED',
    payload:book
  }
}
