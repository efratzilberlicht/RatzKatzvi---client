import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectSubjects = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.subjects,
  );

const makeSelectBooks = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.books,
  );

const makeSelectShiurim = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.shiurim,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectSubjects,
  makeSelectBooks,
  makeSelectShiurim,
  makeSelectLocation,
};
