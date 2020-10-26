import ActionTypes from '../constants';

import {eventsFetched, eventsFetchError, fetchEvents} from '../actions';
import {action} from "typesafe-actions";
import {EventsResponse} from "../types";

describe('App Actions', () => {
  describe('fetchEvents', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ActionTypes.FETCH_EVENTS,
        payload: {
          type: 'type'
        }
      };

      expect(fetchEvents({
        type: 'type'
      })).toMatchObject(expectedResult);
    });
  });

  describe('eventsFetched', () => {
    it('should return the correct type and the passed events', () => {
      const fixture = {
        events: []
      } as EventsResponse;
      const expectedResult = action(ActionTypes.FETCH_EVENTS_SUCCESS, {
        response: fixture,
      });

      expect(eventsFetched(fixture)).toEqual(expectedResult);
    });
  });

  describe('eventsFetchError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = action(ActionTypes.FETCH_EVENTS_ERROR, fixture);

      expect(eventsFetchError(fixture)).toEqual(expectedResult);
    });
  });
});
