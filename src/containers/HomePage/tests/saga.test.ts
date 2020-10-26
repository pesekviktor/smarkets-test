/**
 * Tests for HomePage sagas
 */

import {put} from 'redux-saga/effects';

import ActionTypes from '../../App/constants';

import {getUpcomingEvents} from '../saga';
import {EventsResponse} from "../../App/types";
import {eventsFetched, eventsFetchError} from "../../App/actions";


describe('getEvents Saga', () => {
  let getUpcomingEventsGenerator;

  beforeEach(() => {
    getUpcomingEventsGenerator = getUpcomingEvents({
      type: ActionTypes.FETCH_EVENTS, payload: {
        type: 'football'
      }
    });

    const callDescriptor = getUpcomingEventsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the eventsFetched action if it requests the data successfully', () => {
    const response = {
      pagination: {next_page: 'next_page',},
      events: [{short_name: 'name'}]
    } as EventsResponse;
    const putDescriptor = getUpcomingEventsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(eventsFetched(response)));
  });

  it('should call the eventsError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getUpcomingEventsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(eventsFetchError(response)));
  });
});

/*
* Tests for pagination etc...
*/
