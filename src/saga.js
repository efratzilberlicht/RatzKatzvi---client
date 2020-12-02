import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import {
  booksLoaded,
  booksLoadingError,
  getBookSuccess,
  getBookError,
  addBookSuccess,
  addBookError,
  updateBookSuccess,
  updateBookError,
  deleteBookSuccess,
  deleteBookError,
  subjectsLoaded,
  subjectsLoadingError,
  getSubjectSuccess,
  getSubjectError,
  addSubjectSuccess,
  addSubjectError,
  updateSubjectSuccess,
  updateSubjectError,
  deleteSubjectSuccess,
  deleteSubjectError,
  shiurimLoaded,
  shiurimLoadingError,
  getShiurSuccess,
  getShiurError,
  addShiurSuccess,
  addShiurError,
  updateShiurSuccess,
  updateShiurError,
  deleteShiurSuccess,
  deleteShiurError,

} from './actions';
import { LOAD_BOOK, GET_BOOK, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK,
LOAD_SUBJECT, GET_SUBJECT, ADD_SUBJECT, UPDATE_SUBJECT, DELETE_SUBJECT,
LOAD_SHIUR, GET_SHIUR, ADD_SHIUR, UPDATE_SHIUR, DELETE_SHIUR,} from './constants';
import { all, call } from 'redux-saga/effects';
import * as actions from './actions';

const baseUrl = '/api';
 export function* init() {
    try {
      yield all([
      call(getBookList()),
      call(getShiurList()),
    ]);
      yield put(actions.getBooks.success())
    } catch(e) {
        yield
    }
 }

//Books
export function* getBookList() {
  const requestURL = `${baseUrl}/BookList`;
  try {
    const list = yield call(request, requestURL);
    yield put(booksLoaded(list));
  } catch (err) {
    yield put(booksLoadingError(err));
  }
}

export function* updateBook(action) {
  const requestURL = `${baseUrl}/updateBook/${action.bookId}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.book),
  };
  try {
    const list = yield call(request, requestURL, options);
    yield put(updateBookSuccess(action.bookId, list));
  } catch (err) {
    yield put(updateBookError(err));
  }
}

export function* deleteBook(action) {
 const requestURL = `${baseUrl}/deleteBook/${action.bookId}`;
 const options = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   }
 };
 try {
   const list = yield call(request, requestURL, options);
   yield put(deleteBookSuccess(list));
 } catch (err) {
   yield put(deleteBookError(err));
 }
 }

export function* addBook(action) {
  const requestURL = `${baseUrl}/addBook`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.book),
  };

  try {
    const booksList = yield call(request, requestURL, options);
    yield put(addBookSuccess(action.book, booksList));
  } catch (err) {
    yield put(addBookError(err));
  }
}

export default function* loadBooksData() {
   yield takeLatest(LOAD_BOOK, getBookList);
   yield takeEvery(ADD_BOOK, addBook);
   yield takeEvery(GET_BOOK, getBook);
   yield takeEvery(UPDATE_BOOK, updateBook);
   yield takeEvery(DELETE_BOOK, deleteBook);
}
//Subjects
export function* getSubjectList() {
  const requestURL = `${baseUrl}/SubjectList`;
  try {
    const list = yield call(request, requestURL);
    yield put(subjectsLoaded(list));
  } catch (err) {
    yield put(subjectsLoadingError(err));
  }
}

export function* getSubject(action) {
  const requestURL = `${baseUrl}/getSubject/${action.subjectId}`;

  try {
    const subject = yield call(request, requestURL);
    yield put(getSubjectSuccess(subject));
  } catch (err) {
    yield put(getSubjectError(err));
  }
}

export function* updateSubject(action) {
  const requestURL = `${baseUrl}/updateSubject/${action.subjectId}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.subject),
  };
  try {
    const list = yield call(request, requestURL, options);
    yield put(updateSubjectSuccess(action.subjectId, list));
  } catch (err) {
    yield put(updateSubjectError(err));
  }
}

export function* deleteSubject(action) {
 const requestURL = `${baseUrl}/deleteSubject/${action.subjectId}`;
 const options = {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   }
 };
 try {
   const list = yield call(request, requestURL, options);
   yield put(deleteSubjectSuccess(list));
 } catch (err) {
   yield put(deleteSubjectError(err));
 }
 }

export function* addSubject(action) {
  const requestURL = `${baseUrl}/addSubject`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(action.subject),
  };

  try {
    const subjectsList = yield call(request, requestURL, options);
    yield put(addSubjectSuccess(action.subject, subjectsList));
  } catch (err) {
    yield put(addSubjectError(err));
  }
}

export default function* loadSubjectsData() {
  yield takeLatest(LOAD_SUBJECT, getSubjectList);
  yield takeEvery(ADD_SUBJECT, addSubject);
  yield takeEvery(GET_SUBJECT, getSubject);
  yield takeEvery(UPDATE_SUBJECT, updateSubject);
  yield takeEvery(DELETE_SUBJECT, deleteSubject);
}
//Shiurim
export function* getShiurList() {
    const requestURL = `${baseUrl}/ShiurList`;
    try {
      const list = yield call(request, requestURL);
      yield put(shiurimLoaded(list));
    } catch (err) {
      yield put(shiurimLoadingError(err));
    }
  }
  
  export function* getShiur(action) {
    const requestURL = `${baseUrl}/getShiur/${action.shiurId}`;
  
    try {
      const shiur = yield call(request, requestURL);
      yield put(getShiurSuccess(shiur));
    } catch (err) {
      yield put(getShiurError(err));
    }
  }
  
  export function* updateShiur(action) {
    const requestURL = `${baseUrl}/updateShiur/${action.shiurId}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.shiur),
    };
    try {
      const list = yield call(request, requestURL, options);
      yield put(updateShiurSuccess(action.shiurId, list));
    } catch (err) {
      yield put(updateShiurError(err));
    }
  }
  
  export function* deleteShiur(action) {
   const requestURL = `${baseUrl}/deleteShiur/${action.shiurId}`;
   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     }
   };
   try {
     const list = yield call(request, requestURL, options);
     yield put(deleteShiurSuccess(list));
   } catch (err) {
     yield put(deleteShiurError(err));
   }
   }
  
  export function* addShiur(action) {
    const requestURL = `${baseUrl}/addShiur`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.shiur),
    };
  
    try {
      const shiurimList = yield call(request, requestURL, options);
      yield put(addShiurSuccess(action.shiur, shiurimList));
    } catch (err) {
      yield put(addShiurError(err));
    }
  }
  
  export default function* loadShiurimData() {
    yield takeLatest(LOAD_SHIUR, getShiurList);
    yield takeEvery(ADD_SHIUR, addShiur);
    yield takeEvery(GET_SHIUR, getShiur);
    yield takeEvery(UPDATE_SHIUR, updateShiur);
    yield takeEvery(DELETE_SHIUR, deleteShiur);
  }
                