import produce from 'immer';
import {
  LOAD_BOOK,
  LOAD_BOOK_SUCCESS,
  LOAD_BOOK_ERROR,
  ADD_BOOK,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_ERROR,
  GET_BOOK,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_ERROR,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_ERROR, 
  LOAD_SUBJECT,
  LOAD_SUBJECT_SUCCESS,
  LOAD_SUBJECT_ERROR,
  ADD_SUBJECT,
  ADD_SUBJECT_SUCCESS,
  ADD_SUBJECT_ERROR,
  GET_SUBJECT,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_ERROR,
  UPDATE_SUBJECT,
  UPDATE_SUBJECT_SUCCESS,
  UPDATE_SUBJECT_ERROR,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_ERROR,
  LOAD_SHIUR,
  LOAD_SHIUR_SUCCESS,
  LOAD_SHIUR_ERROR,
  ADD_SHIUR,
  ADD_SHIUR_SUCCESS,
  ADD_SHIUR_ERROR,
  GET_SHIUR,
  GET_SHIUR_SUCCESS,
  GET_SHIUR_ERROR,
  UPDATE_SHIUR,
  UPDATE_SHIUR_SUCCESS,
  UPDATE_SHIUR_ERROR,
  DELETE_SHIUR_SUCCESS,
  DELETE_SHIUR_ERROR,
  DELETE_BOOK
} from './constnts';
import {getType} from 'typesafe-actions';
import * as actions from './actions';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  books: false,
  currentBook: false,
  subjects: false,
  currentSubject: false,
  shiurim: false,
  currentShiur: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {

    switch (action.type) {
      
        case getType(actions.init.request):
        draft.loading = true;                 
        break;

        case getType(actions.init.success):
        draft.loading = false;               
        break;

                  //BOOK
        case LOAD_BOOK:
        draft.loading = true;
        draft.error = false;
        draft.books = false;
        break;
//======================================================================================================
      case LOAD_BOOK_SUCCESS:
        draft.books = action.payload;
        draft.loading = false;
        draft.error = false;
        break;

      case GET_BOOK:
        draft.loading = true;
        draft.error = false;
        draft.currentBook = false;
        break;

      case GET_BOOK_SUCCESS:
        draft.loading = false;
        draft.currentBook = action.book;
        break;
      
      case ADD_BOOK:
      case UPDATE_BOOK:
      case DELETE_BOOK:                  
        draft.loading = true;
        draft.error = false;
        break;

      case ADD_BOOK_SUCCESS:
      case UPDATE_BOOK_SUCCESS:
        draft.loading = false;
        draft.books = action.books;
        draft.currentBook = action.book;
        break;

      case DELETE_BOOK_SUCCESS:
         draft.loading = false;
         draft.books = action.books;
         draft.currentBook = false;
         break;

      case ADD_BOOK_ERROR:
      case UPDATE_BOOK_ERROR:
      case GET_BOOK_ERROR:
      case DELETE_BOOK_ERROR:
      case LOAD_BOOK_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
     //SUBJECT
      case LOAD_SUBJECT:
       draft.loading = true;
       draft.error = false;
       draft.subjects = false;
       break;

      case LOAD_SUBJECT_SUCCESS:
        draft.subjects = action.subjects;
        draft.loading = false;
        draft.error = false;
        break;
      
      case GET_SUBJECT:
        draft.loading = true;
        draft.error = false;
        draft.currentSubject = false;
        break;
      
      case GET_SUBJECT_SUCCESS:
        draft.loading = false;
        draft.currentSubject = action.subject;
        break;
      
      case ADD_SUBJECT:
      case UPDATE_SUBJECT:
      case DELETE_SUBJECT:                  
        draft.loading = true;
        draft.error = false;
        break;
      
      case ADD_SUBJECT_SUCCESS:
      case UPDATE_SUBJECT_SUCCESS:
        draft.loading = false;
        draft.subjects = action.subjects;
        draft.currentSubject = action.subject;
        break;

        case DELETE_SUBJECT_SUCCESS:
         draft.loading = false;
         draft.subjects = action.subjects;
         draft.currentSubject = false;
         break;
      
      case ADD_SUBJECT_ERROR:
      case UPDATE_SUBJECT_ERROR:
      case GET_SUBJECT_ERROR:
      case DELETE_SUBJECT_ERROR:
      case LOAD_SUBJECT_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      //SHIUR
      case LOAD_SHIUR:
        draft.loading = true;
        draft.error = false;
        draft.shiurim = false;
        break;
           
       case LOAD_SHIUR_SUCCESS:
         draft.shiurim = action.shiurim;
         draft.loading = false;
         draft.error = false;
         break;
       
       case GET_SHIUR:
         draft.loading = true;
         draft.error = false;
         draft.currentShiur = false;
         break;
       
       case GET_SHIUR_SUCCESS:
         draft.loading = false;
         draft.currentShiur = action.shiur;
         break;
       
       case ADD_SHIUR:
       case UPDATE_SHIUR:
       case DELETE_SHIUR:                  
         draft.loading = true;
         draft.error = false;
         break;
       
       case ADD_SHIUR_SUCCESS:
       case UPDATE_SHIUR_SUCCESS:
         draft.loading = false;
         draft.shiurim = action.shiurim;
         draft.currentShiur = action.shiur;
         break;

      case DELETE_SHIUR_SUCCESS:
         draft.loading = false;
         draft.shiurim = action.shiurim;
         draft.currentShiur = false;
         break;
       
       case ADD_SHIUR_ERROR:
       case UPDATE_SHIUR_ERROR:
       case GET_SHIUR_ERROR:
       case DELETE_SHIUR_ERROR:
       case LOAD_SHIUR_ERROR:
         draft.error = action.error;
         draft.loading = false;
         break;
}
});
      
export default appReducer;
      