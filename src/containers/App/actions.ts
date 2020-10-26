import {action} from 'typesafe-actions';

import ActionTypes from './constants';
import {EventFilter, EventsResponse} from './types';

export const fetchEvents = (eventFilter: EventFilter) =>
  action(ActionTypes.FETCH_EVENTS, eventFilter);
export const eventsFetched = (response: EventsResponse) =>
  action(ActionTypes.FETCH_EVENTS_SUCCESS, {response: response});
export const eventsFetchError = (error: object) =>
  action(ActionTypes.FETCH_EVENTS_ERROR, error);
