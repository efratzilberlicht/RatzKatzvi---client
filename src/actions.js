// import {
//    LOAD_BOOK,
//    LOAD_BOOK_SUCCESS,
//    LOAD_BOOK_ERROR,
//    ADD_BOOK,
//    ADD_BOOK_SUCCESS,
//    ADD_BOOK_ERROR,
//    GET_BOOK,
//    GET_BOOK_SUCCESS,
//    GET_BOOK_ERROR,
//    UPDATE_BOOK,
//    UPDATE_BOOK_SUCCESS,
//    UPDATE_BOOK_ERROR,
//    UPDATE_BOOK,
//    DELETE_BOOK_SUCCESS,
//    DELETE_BOOK_ERROR, 
//    LOAD_SUBJECT,
//    LOAD_SUBJECT_SUCCESS,
//    LOAD_SUBJECT_ERROR,
//    ADD_SUBJECT,
//    ADD_SUBJECT_SUCCESS,
//    ADD_SUBJECT_ERROR,
//    GET_SUBJECT,
//    GET_SUBJECT_SUCCESS,
//    GET_SUBJECT_ERROR,
//    UPDATE_SUBJECT,
//    UPDATE_SUBJECT_SUCCESS,
//    UPDATE_SUBJECT_ERROR,
//    UPDATE_SUBJECT,
//    DELETE_SUBJECT_SUCCESS,
//    DELETE_SUBJECT_ERROR,
//    LOAD_SHIUR,
//    LOAD_SHIUR_SUCCESS,
//    LOAD_SHIUR_ERROR,
//    ADD_SHIUR,
//    ADD_SHIUR_SUCCESS,
//    ADD_SHIUR_ERROR,
//    GET_SHIUR,
//    GET_SHIUR_SUCCESS,
//    GET_SHIUR_ERROR,
//    UPDATE_SHIUR,
//    UPDATE_SHIUR_SUCCESS,
//    UPDATE_SHIUR_ERROR,
//    UPDATE_SHIUR,
//    DELETE_SHIUR_SUCCESS,
//    DELETE_SHIUR_ERROR,
//    DELETE_BOOK
//  } from './constants';
//  import {createAsyncAction, createAction} from 'typesafe-actions';
//  //Books
//  export function loadBooks() {
//    return {
//      type: LOAD_BOOK,
//    };
//  }
 
//  export function booksLoaded(books) {
//    return {
//      type: LOAD_BOOK_SUCCESS,
//      books,
//    };
//  }

//  export function booksLoadingError(error) {
//    return {
//      type: LOAD_BOOK_ERROR,
//      error,
//    };
//  }
//  //to set global
//  export const setUserName = createAction('SET_USER')();

//  export const init  = createAsyncAction(
//   'INIT_REQUEST',
//   'INIT_SUCCESS',
//   'INIT_FAILURE'
//  )();
//  export const getBooks =  createAsyncAction(
//   'GET_BOOK_REQUEST',
//   'GET_BOOK_SUCCESS',
//   'GET_BOOK_ERROR',
//  )();
//  // GET BOOK
//  export function getBook(books) {
//    return {
//      type: GET_BOOK,
//      bookId,
//    };
//  }
 
//  export function getBookSuccess(book) {
//    return {
//      type: GET_BOOK_SUCCESS,
//      book,
//    };
//  }
 
//  export function getBookError(error) {
//    return {
//      type: GET_BOOK_ERROR,
//      error,
//    };
//  }
//  // ADD BOOK
//  export function addBook(book) {
//    return {
//      type: ADD_BOOK,
//      book,
//    };
//  }
 
//  export function addBookSuccess(book, books) {
//    return {
//      type: ADD_BOOK_SUCCESS,
//      book,
//      books,
//    };
//  }
 
//  export function addBookError(error) {
//    return {
//      type: ADD_BOOK_ERROR,
//      error,
//    };
//  }
//  // UPDATE BOOK
//  export function updateBook(bookId) {
//    return {
//      type: UPDATE_BOOK,
//      bookId,
//    };
//  }
 
//  export function updateBookSuccess(book, books) {
//    return {
//      type: UPDATE_BOOK_SUCCESS,
//      book,
//      books,
//    };
//  }
 
//  export function updateBookError(error) {
//    return {
//      type: UPDATE_BOOK_ERROR,
//      error,
//    };
//  }
//  // DELETE BOOK
//  export function deleteBook(bookId) {
//   return {
//     type: DELETE_BOOK,
//     bookId,
//   };
// }

// export function deleteBookSuccess(books) {
//   return {
//     type: DELETE_BOOK_SUCCESS,
//     books,
//   };
// }

// export function deleteBookError(error) {
//   return {
//     type: DELETE_BOOK_ERROR,
//     error,
//   };
// }
//  //Subject
//  export function loadSubjects() {
//    return {
//      type: LOAD_SUBJECT,
//    };
//  }

//  export function subjectsLoaded(subjects) {
//    return {
//      type: LOAD_SUBJECT_SUCCESS,
//      subjects,
//    };
//  }
 
//  export function subjectsLoadingError(error) {
//    return {
//      type: LOAD_SUBJECT_ERROR,
//      error,
//    };
//  }
//  // GET SUBJECT
//  export function getSubject(subjectId) {
//    return {
//      type: GET_SUBJECT,
//      subjectId,
//    };
//  }
 
//  export function getSubjectSuccess(subject) {
//    return {
//      type: GET_SUBJECT_SUCCESS,
//      subject,
//    };
//  }
 
//  export function getSubjectError(error) {
//    return {
//      type: GET_SUBJECT_ERROR,
//      error,
//    };
//  }
//  // ADD SUBJECT
//  export function addSubject(subject) {
//    return {
//      type: ADD_SUBJECT,
//      subject,
//    };
//  }
 
//  export function addSubjectSuccess(subject, subjects) {
//    return {
//      type: ADD_SUBJECT_SUCCESS,
//      subject,
//      subjects,
//    };
//  }
 
//  export function addSubjectError(error) {
//    return {
//      type: ADD_SUBJECT_ERROR,
//      error,
//    };
//  }
//  // UPDATE SUBJECT
//  export function updateSubject(subjectId) {
//    return {
//      type: UPDATE_SUBJECT,
//      subjectId,
//    };
//  }
 
//  export function updateSubjectSuccess(subject, subjects) {
//    return {
//      type: UPDATE_SUBJECT_SUCCESS,
//      subject,
//      subjects,
//    };
//  }
 
//  export function updateSubjectError(error) {
//    return {
//      type: UPDATE_SUBJECT_ERROR,
//      error,
//    };
//  }
//  // DELETE SUBJECT
//  export function deleteSubject(subjectId) {
//   return {
//     type: DELETE_SUBJECT,
//     subjectId,
//   };
// }

// export function deleteSubjectSuccess(subjects) {
//   return {
//     type: DELETE_SUBJECT_SUCCESS,
//     subjects,
//   };
// }

// export function deleteSubjectError(error) {
//   return {
//     type: DELETE_SUBJECT_ERROR,
//     error,
//   };
// }

// //Shiurim
//  export function loadShiurim() {
//    return {
//      type: LOAD_SHIUR,
//    };
//  }

//  export function shiurimLoaded(shiurim) {
//    return {
//      type: LOAD_SHIUR_SUCCESS,
//      shiurim,
//    };
//  }
 
//  export function shiurimLoadingError(error) {
//    return {
//      type: LOAD_SHIUR_ERROR,
//      error,
//    };
//  }
//  // GET SHIUR
//  export function getShiur(shiurId) {
//    return {
//      type: GET_SHIUR,
//      shiurId,
//    };
//  }
 
//  export function getShiurSuccess(book) {
//    return {
//      type: GET_SHIUR_SUCCESS,
//      shiur,
//    };
//  }
 
//  export function getShiurError(error) {
//    return {
//      type: GET_SHIUR_ERROR,
//      error,
//    };
//  }
//  // ADD SHIUR
//  export function addShiur(shiur) {
//    return {
//      type: ADD_SHIUR,
//      shiur,
//    };
//  }
 
//  export function addShiurSuccess(shiur, shiurim) {
//    return {
//      type: ADD_SHIUR_SUCCESS,
//      shiur,
//      shiurim,
//    };
//  }
 
//  export function addShiurError(error) {
//    return {
//      type: ADD_SHIUR_ERROR,
//      error,
//    };
//  }
//  // UPDATE SHIUR
//  export function updateShiur(shiurId) {
//    return {
//      type: UPDATE_SHIUR,
//      shiurId,
//    };
//  }
 
//  export function updateShiurSuccess(shiur, shiurim) {
//    return {
//      type: UPDATE_SHIUR_SUCCESS,
//      shiur,
//      shiurim,
//    };
//  }
 
//  export function updateShiurError(error) {
//    return {
//      type: UPDATE_SHIUR_ERROR,
//      error,
//    };
//  }
//  // DELETE SHIUR
//  export function deleteShiur(shiurId) {
//   return {
//     type: DELETE_SHIUR,
//     shiurId,
//   };
// }

// export function deleteShiurSuccess(shiurim) {
//   return {
//     type: DELETE_SHIUR_SUCCESS,
//     shiurim,
//   };
// }

// export function deleteShiurError(error) {
//   return {
//     type: DELETE_SHIUR_ERROR,
//     error,
//   };
// }
 