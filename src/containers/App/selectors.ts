import {createSelector} from 'reselect';
import {ApplicationRootState} from '../../types';
import {AppState} from "./types";

const selectAppState = (state: ApplicationRootState) => state.appState;

export const makeSelectEventsLoading = () =>
  createSelector(selectAppState, appState => appState.eventsState.loading);

export const makeSelectEventsError = () =>
  createSelector(selectAppState, appState => appState.eventsState.error);

export const makeSelectEvents = () =>
  createSelector(selectAppState, (appState: AppState) => appState.eventsState.results);

export const makeSelectEventsPagination = () =>
  createSelector(selectAppState, appState => appState.eventsState.pagination);

export const makeSelectEventsState = () =>
  createSelector(selectAppState, appState => appState.eventsState);
