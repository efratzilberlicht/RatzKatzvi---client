import { createAsyncAction, createAction } from 'typesafe-actions';

//Set global - an example
export const setUserName = createAction('SET_USER')();

//Init all the data
export const init = createAsyncAction(
  'INIT_REQUEST',
  'INIT_SUCCESS',
  'INIT_FAILURE'
)();
//Books 

// GET BOOKS
export const getBooksList = createAsyncAction(
  'GET_BOOKS_REQUEST',
  'GET_BOOKS_SUCCESS',
  'GET_BOOKS_ERROR',
)();

// ADD BOOK
export const addBook = createAsyncAction(
  'ADD_BOOKS_REQUEST',
  'ADD_BOOKS_SUCCESS',
  'ADD_BOOKS_ERROR',
)();

// UPDATE BOOK
export const updateBook = createAsyncAction(
  'UPDATE_BOOKS_REQUEST',
  'UPDATE_BOOKS_SUCCESS',
  'UPDATE_BOOKS_ERROR',
)();

// DELETE BOOK
export const deleteBook = createAsyncAction(
  'DELETE_BOOKS_REQUEST',
  'DELETE_BOOKS_SUCCESS',
  'DELETE_BOOKS_ERROR',
)();

//Subject

// GET SUBJECT
export const getSubjectsList = createAsyncAction(
  'GET_SUBJECTS_REQUEST',
  'GET_SUBJECTS_SUCCESS',
  'GET_SUBJECTS_ERROR',
)();

// ADD SUBJECT
export const addSubject = createAsyncAction(
  'ADD_SUBJECT_REQUEST',
  'ADD_SUBJECT_SUCCESS',
  'ADD_SUBJECT_ERROR',
)();

// UPDATE SUBJECT
export const updateSubject = createAsyncAction(
  'UPDATE_SUBJECT_REQUEST',
  'UPDATE_SUBJECT_SUCCESS',
  'UPDATE_SUBJECT_ERROR',
)();

// DELETE SUBJECT
export const deleteSubject = createAsyncAction(
  'DELETE_SUBJECT_REQUEST',
  'DELETE_SUBJECT_SUCCESS',
  'DELETE_SUBJECT_ERROR',
)();

//Shiurim

// GET SHIUR
export const getShiurimList = createAsyncAction(
  'GET_SHIURIM_REQUEST',
  'GET_SHIURIM_SUCCESS',
  'GET_SHIURIM_ERROR',
)();

// ADD SHIUR
export const addShiur = createAsyncAction(
  'ADD_SHIURIM_REQUEST',
  'ADD_SHIURIM_SUCCESS',
  'ADD_SHIURIM_ERROR',
)();

// UPDATE SHIUR
export const updateShiur = createAsyncAction(
  'UPDATE_SHIURIM_REQUEST',
  'UPDATE_SHIURIM_SUCCESS',
  'UPDATE_SHIURIM_ERROR',
)();

// DELETE SHIUR
export const deleteShiur = createAsyncAction(
  'DELETE_SHIURIM_REQUEST',
  'DELETE_SHIURIM_SUCCESS',
  'DELETE_SHIURIM_ERROR',
)();

//Video
// GET VIDEO
export const getVideoList = createAsyncAction(
  'GET_VIDEO_REQUEST',
  'GET_VIDEO_SUCCESS',
  'GET_VIDEO_ERROR',
)();

// ADD VIDEO
export const addVideo = createAsyncAction(
  'ADD_VIDEO_REQUEST',
  'ADD_VIDEO_SUCCESS',
  'ADD_VIDEO_ERROR',
)();

// UPDATE VIDEO
export const updateVideo = createAsyncAction(
  'UPDATE_VIDEO_REQUEST',
  'UPDATE_VIDEO_SUCCESS',
  'UPDATE_VIDEO_ERROR',
)();

// DELETE VIDEO
export const deleteVideo = createAsyncAction(
  'DELETE_VIDEO_REQUEST',
  'DELETE_VIDEO_SUCCESS',
  'DELETE_VIDEO_ERROR',
)();

//Pictures
// GET PICTURES
export const getPicturesList = createAsyncAction(
  'GET_VIDEO_REQUEST',
  'GET_VIDEO_SUCCESS',
  'GET_VIDEO_ERROR',
)();

// ADD PICTURE
export const addPicture = createAsyncAction(
  'ADD_PICTURE_REQUEST',
  'ADD_PICTURE_SUCCESS',
  'ADD_PICTURE_ERROR',
)();

// UPDATE PICTURE
export const updatePicture = createAsyncAction(
  'UPDATE_PICTURE_REQUEST',
  'UPDATE_PICTURE_SUCCESS',
  'UPDATE_PICTURE_ERROR',
)();

// DELETE PICTURE
export const deletePicture = createAsyncAction(
  'DELETE_PICTURE_REQUEST',
  'DELETE_PICTURE_SUCCESS',
  'DELETE_PICTURE_ERROR',
)();

//CV TEXT
//GET CV TEXT
export const getCVText = createAsyncAction(
  'GET_CV_REQUEST',
  'GET_CV_SUCCESS',
  'GET_CV_ERROR',
)();
//UPDATE CV TEXT
export const updateCVText = createAsyncAction(
  'UPDATE_CV_REQUEST',
  'UPDATE_CV_SUCCESS',
  'UPDATE_CV_ERROR',
)();