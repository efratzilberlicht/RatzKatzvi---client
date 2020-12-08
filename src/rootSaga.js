import {all} from 'redux-saga/effects';
import watchSaga from './saga';

export function* rootSaga() {
yield all([
 watchSaga()     
])                
}