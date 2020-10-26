import {call, put, takeLatest} from 'redux-saga/effects';
import {eventsFetched, eventsFetchError, fetchEvents,} from '../App/actions';
import ActionTypes from '../App/constants';

import request from '../../utils/request';
import {ActionType} from 'typesafe-actions';

export function* getUpcomingEvents({
                                     payload: {paginationUrl, type},
                                   }: ActionType<typeof fetchEvents>) {
  /**
   * In complex application urls would be in environment variables and paths would be kept in some api constants.
   * There would be a library to build url params etc.
   */
  let requestURL = `/v3/events/?state=upcoming&type=${type}`;
  if (paginationUrl) {
    requestURL = `/v3/events/${paginationUrl}`;
  }

  try {
    const events = yield call(request, requestURL);
    yield put(eventsFetched(events));
  } catch (err) {
    yield put(eventsFetchError(err));
  }
}

export default function* fetchUpcomingEvents() {
  yield takeLatest(ActionTypes.FETCH_EVENTS, getUpcomingEvents);
}
