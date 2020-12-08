import produce from 'immer';
import {getType} from 'typesafe-actions';
import * as actions from './actions';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  booksList: [],
  currentBook: [],
  subjectsList:[],
  currentSubject: false,
  shiurimList: false,
  currentShiur: false,
};

export const appReducer = (state = initialState, action) =>
  produce(state, draft => {

    switch (action.type) {
      
        case getType(actions.init.request):
          return {
            ...state,
            loading: true,
          }

        case getType(actions.init.success):
          return {
            ...state,
            loading: false,
          }

        case getType(actions.getBooksList.request):
          return {
            ...state,
            loading: true,
          }
  
          case getType(actions.getBooksList.success):
            return {
              ...state,
              loading: false,
              booksList: action.payload
            }
         
//         //BOOK
//         case LOAD_BOOK:
//         draft.loading = true;
//         draft.error = false;
//         draft.booksList = false;
//         break;
// //======================================================================================================
//       case LOAD_BOOK_SUCCESS:
//         draft.booksList = action.payload;
//         draft.loading = false;
//         draft.error = false;
//         break;

//       case GET_BOOK:
//         draft.loading = true;
//         draft.error = false;
//         draft.currentBook = false;
//         break;

//       case GET_BOOK_SUCCESS:
//         draft.loading = false;
//         draft.currentBook = action.book;
//         break;
      
//       case ADD_BOOK:
//       case UPDATE_BOOK:
//       case DELETE_BOOK:                  
//         draft.loading = true;
//         draft.error = false;
//         break;

//       case ADD_BOOK_SUCCESS:
//       case UPDATE_BOOK_SUCCESS:
//         draft.loading = false;
//         draft.booksList = action.booksList;
//         draft.currentBook = action.book;
//         break;

//       case DELETE_BOOK_SUCCESS:
//          draft.loading = false;
//          draft.booksList = action.booksList;
//          draft.currentBook = false;
//          break;

//       case ADD_BOOK_ERROR:
//       case UPDATE_BOOK_ERROR:
//       case GET_BOOK_ERROR:
//       case DELETE_BOOK_ERROR:
//       case LOAD_BOOK_ERROR:
//         draft.error = action.error;
//         draft.loading = false;
//         break;
//      //SUBJECT
//       case LOAD_SUBJECT:
//        draft.loading = true;
//        draft.error = false;
//        draft.subjectsList = false;
//        break;

//       case LOAD_SUBJECT_SUCCESS:
//         draft.subjectsList = action.subjectsList;
//         draft.loading = false;
//         draft.error = false;
//         break;
      
//       case GET_SUBJECT:
//         draft.loading = true;
//         draft.error = false;
//         draft.currentSubject = false;
//         break;
      
//       case GET_SUBJECT_SUCCESS:
//         draft.loading = false;
//         draft.currentSubject = action.subject;
//         break;
      
//       case ADD_SUBJECT:
//       case UPDATE_SUBJECT:
//       case DELETE_SUBJECT:                  
//         draft.loading = true;
//         draft.error = false;
//         break;
      
//       case ADD_SUBJECT_SUCCESS:
//       case UPDATE_SUBJECT_SUCCESS:
//         draft.loading = false;
//         draft.subjectsList = action.subjectsList;
//         draft.currentSubject = action.subject;
//         break;

//         case DELETE_SUBJECT_SUCCESS:
//          draft.loading = false;
//          draft.subjectsList = action.subjectsList;
//          draft.currentSubject = false;
//          break;
      
//       case ADD_SUBJECT_ERROR:
//       case UPDATE_SUBJECT_ERROR:
//       case GET_SUBJECT_ERROR:
//       case DELETE_SUBJECT_ERROR:
//       case LOAD_SUBJECT_ERROR:
//         draft.error = action.error;
//         draft.loading = false;
//         break;
//       //SHIUR
//       case LOAD_SHIUR:
//         draft.loading = true;
//         draft.error = false;
//         draft.shiurimList = false;
//         break;
           
//        case LOAD_SHIUR_SUCCESS:
//          draft.shiurimList = action.shiurimList;
//          draft.loading = false;
//          draft.error = false;
//          break;
       
//        case GET_SHIUR:
//          draft.loading = true;
//          draft.error = false;
//          draft.currentShiur = false;
//          break;
       
//        case GET_SHIUR_SUCCESS:
//          draft.loading = false;
//          draft.currentShiur = action.shiur;
//          break;
       
//        case ADD_SHIUR:
//        case UPDATE_SHIUR:
//        case DELETE_SHIUR:                  
//          draft.loading = true;
//          draft.error = false;
//          break;
       
//        case ADD_SHIUR_SUCCESS:
//        case UPDATE_SHIUR_SUCCESS:
//          draft.loading = false;
//          draft.shiurimList = action.shiurimList;
//          draft.currentShiur = action.shiur;
//          break;

//       case DELETE_SHIUR_SUCCESS:
//          draft.loading = false;
//          draft.shiurimList = action.shiurimList;
//          draft.currentShiur = false;
//          break;
       
//        case ADD_SHIUR_ERROR:
//        case UPDATE_SHIUR_ERROR:
//        case GET_SHIUR_ERROR:
//        case DELETE_SHIUR_ERROR:
//        case LOAD_SHIUR_ERROR:
//          draft.error = action.error;
//          draft.loading = false;
//          break;
}
});
      
export default appReducer;
      