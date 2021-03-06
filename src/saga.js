import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { getType } from 'typesafe-actions';
import { ToggleButton } from 'react-bootstrap';

const baseUrl = 'https://localhost:44392/api';
export function* init() {
  try {
    yield all([
      call(getBooksList),
      call(getSubjectsList),
      call(getShiurimList),
      call(getVideoList),
      call(getPicturesList),
      call(getCVText)
    ]);
    yield put(actions.init.success());
  } catch (err) {
    yield put(actions.init.failure(err));
  }
}

//Books
export function* getBooksList() {
  const requestURL = `${baseUrl}/items/GetAllByKind/1`;
  try {
    const list = yield call(fetch, requestURL);
    const listJson = yield list.json();
    yield put(actions.getBooksList.success(listJson));
  } catch (err) {
    yield put(actions.getBooksList.failure(err));
  }
}

//Subjects 
export function* getSubjectsList() {
  const requestURL = `${baseUrl}/subjects`;
  try {
    const list = yield call(fetch, requestURL);
    const listJson = yield list.json();
    yield put(actions.getSubjectsList.success(listJson));
  } catch (err) {
    yield put(actions.getSubjectsList.failure(err));
  }
}

//Shiurim
export function* getShiurimList() {
  const requestURL = `${baseUrl}/items/GetAllByKind/4`;
  try {
    const list = yield call(fetch, requestURL);
    const listJson = yield list.json();
    yield put(actions.getShiurimList.success(listJson));
  } catch (err) {
    yield put(actions.getShiurimList.failure(err));
  }
}

//Video
export function* getVideoList() {
  const requestURL = `${baseUrl}/items/GetAllByKind/3`;
  try {
    const list = yield call(fetch, requestURL);
    const listJson = yield list.json();
    yield put(actions.getVideoList.success(listJson));
  } catch (err) {
    yield put(actions.getVideoList.failure(err));
  }
}

//Pictures
export function* getPicturesList() {
  const requestURL = `${baseUrl}/items/GetAllByKind/5`;
  try {
    const list = yield call(fetch, requestURL);
    const listJson = yield list.json();
    yield put(actions.getPicturesList.success(listJson));
  } catch (err) {
    yield put(actions.getPicturesList.failure(err));
  }
}

//CVText
export function* getCVText() {
  const requestURL = `${baseUrl}/files/GetCvText`;
  try {
    const CV = yield call(fetch, requestURL);
    const CVText = yield CV.json();
    yield put(actions.getCVText.success(CVText));
  } catch (err) {
    yield put(actions.getCVText.failure(err));
  }
}

//USER
export function* getUser() {
  const requestURL = `${baseUrl}/users/LoginByEmail/{email}/{password}`;
  try {
    const CV = yield call(fetch, requestURL);
    const CVText = yield CV.json();
    yield put(actions.getUser.success(CVText));
  } catch (err) {
    yield put(actions.getUser.failure(err));
  }
}
export function* createUser(newUser) {
  const requestURL = `${baseUrl}/users`;
  try {
    const CV = yield call(fetch, requestURL, { method: 'POST', body: {newUser} });
    const CVText = yield CV.json();
    yield put(actions.getUser.success(CVText));
  } catch (err) {
    yield put(actions.getUser.failure(err));
  }
}


// export function* updateBook(action) {
//   const requestURL = `${baseUrl}/updateBook/${action.bookId}`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(action.book),
//   };
//   try {
//     const list = yield call(request, requestURL, options);
//     yield put(updateBookSuccess(action.bookId, list));
//   } catch (err) {
//     yield put(updateBookfailure(err));
//   }
// }

// export function* deleteBook(action) {
//  const requestURL = `${baseUrl}/deleteBook/${action.bookId}`;
//  const options = {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//    }
//  };
//  try {
//    const list = yield call(request, requestURL, options);
//    yield put(deleteBookSuccess(list));
//  } catch (err) {
//    yield put(deleteBookError(err));
//  }
//  }

// export function* addBook(action) {
//   const requestURL = `${baseUrl}/addBook`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(action.book),
//   };

//   try {
//     const booksList = yield call(request, requestURL, options);
//     yield put(addBookSuccess(action.book, booksList));
//   } catch (err) {
//     yield put(addBookError(err));
//   }
// }

// export default function* loadBooksData() {
//    yield takeLatest(LOAD_BOOK, getBookList);
//    yield takeEvery(ADD_BOOK, addBook);
//    yield takeEvery(GET_BOOK, getBook);
//    yield takeEvery(UPDATE_BOOK, updateBook);
//    yield takeEvery(DELETE_BOOK, deleteBook);
// }
// //Subjects
// export function* getSubjectList() {
//   const requestURL = `${baseUrl}/SubjectList`;
//   try {
//     const list = yield call(request, requestURL);
//     yield put(subjectsLoaded(list));
//   } catch (err) {
//     yield put(subjectsLoadingError(err));
//   }
// }

// export function* getSubject(action) {
//   const requestURL = `${baseUrl}/getSubject/${action.subjectId}`;

//   try {
//     const subject = yield call(request, requestURL);
//     yield put(getSubjectSuccess(subject));
//   } catch (err) {
//     yield put(getSubjectError(err));
//   }
// }

// export function* updateSubject(action) {
//   const requestURL = `${baseUrl}/updateSubject/${action.subjectId}`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(action.subject),
//   };
//   try {
//     const list = yield call(request, requestURL, options);
//     yield put(updateSubjectSuccess(action.subjectId, list));
//   } catch (err) {
//     yield put(updateSubjectError(err));
//   }
// }

// export function* deleteSubject(action) {
//  const requestURL = `${baseUrl}/deleteSubject/${action.subjectId}`;
//  const options = {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//    }
//  };
//  try {
//    const list = yield call(request, requestURL, options);
//    yield put(deleteSubjectSuccess(list));
//  } catch (err) {
//    yield put(deleteSubjectError(err));
//  }
//  }

// export function* addSubject(action) {
//   const requestURL = `${baseUrl}/addSubject`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(action.subject),
//   };

//   try {
//     const subjectsList = yield call(request, requestURL, options);
//     yield put(addSubjectSuccess(action.subject, subjectsList));
//   } catch (err) {
//     yield put(addSubjectError(err));
//   }
// }

// export default function* loadSubjectsData() {
//   yield takeLatest(LOAD_SUBJECT, getSubjectList);
//   yield takeEvery(ADD_SUBJECT, addSubject);
//   yield takeEvery(GET_SUBJECT, getSubject);
//   yield takeEvery(UPDATE_SUBJECT, updateSubject);
//   yield takeEvery(DELETE_SUBJECT, deleteSubject);
// }
//Shiurim
// export function* getShiurList() {
//     const requestURL = `${baseUrl}/ShiurList`;
//     try {
//       const list = yield call(request, requestURL);
//       yield put(shiurimLoaded(list));
//     } catch (err) {
//       yield put(shiurimLoadingError(err));
//     }
//   }

//   export function* getShiur(action) {
//     const requestURL = `${baseUrl}/getShiur/${action.shiurId}`;

//     try {
//       const shiur = yield call(request, requestURL);
//       yield put(getShiurSuccess(shiur));
//     } catch (err) {
//       yield put(getShiurError(err));
//     }
//   }

//   export function* updateShiur(action) {
//     const requestURL = `${baseUrl}/updateShiur/${action.shiurId}`;
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(action.shiur),
//     };
//     try {
//       const list = yield call(request, requestURL, options);
//       yield put(updateShiurSuccess(action.shiurId, list));
//     } catch (err) {
//       yield put(updateShiurError(err));
//     }
//   }

//   export function* deleteShiur(action) {
//    const requestURL = `${baseUrl}/deleteShiur/${action.shiurId}`;
//    const options = {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json',
//      }
//    };
//    try {
//      const list = yield call(request, requestURL, options);
//      yield put(deleteShiurSuccess(list));
//    } catch (err) {
//      yield put(deleteShiurError(err));
//    }
//    }

//   export function* addShiur(action) {
//     const requestURL = `${baseUrl}/addShiur`;
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(action.shiur),
//     };

//     try {
//       const shiurimList = yield call(request, requestURL, options);
//       yield put(addShiurSuccess(action.shiur, shiurimList));
//     } catch (err) {
//       yield put(addShiurError(err));
//     }
//   }

// export default function* loadShiurimData() {
//   yield takeLatest(LOAD_SHIUR, getShiurList);
//   yield takeEvery(ADD_SHIUR, addShiur);
//   yield takeEvery(GET_SHIUR, getShiur);
//   yield takeEvery(UPDATE_SHIUR, updateShiur);
//   yield takeEvery(DELETE_SHIUR, deleteShiur);
// }

function* watchInit() {
  yield takeLatest(getType(actions.init.request), init)
}

export default function* watchSaga() {
  yield all([
    watchInit(),
  ])
}