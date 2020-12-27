import produce from 'immer';
import { getType } from 'typesafe-actions';
import * as actions from './actions';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  booksList: [],
  currentBook: [],
  subjectsList: [],
  videoList: [],
  picturesList: [],
  currentSubject: false,
  shiurimList: [],
  currentShiur: false,
};

export const appReducer = (state = initialState, action) =>
  produce(state, draft => {

    switch (action.type) {
      //init
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

      case getType(actions.init.failure):
        return {
          ...state,
          loading: false,
        }

      //Books  
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

      case getType(actions.getBooksList.failure):
        return {
          ...state,
          loading: false,
        }

      //Subjects 
      case getType(actions.getSubjectsList.request):
        return {
          ...state,
          loading: true,
        }

      case getType(actions.getSubjectsList.success):
        return {
          ...state,
          loading: false,
          subjectsList: action.payload
        }

      case getType(actions.getSubjectsList.failure):
        return {
          ...state,
          loading: false,
        }

      //Shiurim
      case getType(actions.getShiurimList.request):
        return {
          ...state,
          loading: true,
        }

      case getType(actions.getShiurimList.success):
        return {
          ...state,
          loading: false,
          booksList: action.payload
        }

      case getType(actions.getShiurimList.failure):
        return {
          ...state,
          loading: false,
        }
     
      //Video
      case getType(actions.getVideoList.request):
        return {
          ...state,
          loading: true,
        }

      case getType(actions.getVideoList.success):
        return {
          ...state,
          loading: false,
          booksList: action.payload
        }

      case getType(actions.getVideoList.failure):
        return {
          ...state,
          loading: false,
        }
      
      //Pictures
      case getType(actions.getPicturesList.request):
        return {
          ...state,
          loading: true,
        }

      case getType(actions.getPicturesList.success):
        return {
          ...state,
          loading: false,
          booksList: action.payload
        }

      case getType(actions.getPicturesList.failure):
        return {
          ...state,
          loading: false,
        }
      
      default:

}
  });

export default appReducer;
