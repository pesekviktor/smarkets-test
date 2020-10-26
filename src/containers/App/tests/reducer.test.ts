import appReducer from '../reducer';
import {eventsFetched, eventsFetchError, fetchEvents} from '../actions';
import {AppState, EventsResponse} from '../types';

describe('appReducer', () => {
  let state: AppState;
  beforeEach(() => {
    state = {
      eventsState: {
        results: [],
        loading: false,
        error: false
      },
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the fetchEvents action correctly', () => {
    const expectedResult: AppState = {
      eventsState: {
        results: [],
        loading: true,
        error: false
      },
    };

    expect(appReducer(state, fetchEvents({}))).toEqual(expectedResult);
  });

  it('should handle the eventsFetched action correctly', () => {
    const fixture = {
      events: [{start_datetime: 'start_datetime', short_name: 'name'}],
      pagination: {
        next_page: 'next_page'
      }
    } as EventsResponse;
    const expectedResult: AppState = {
      eventsState: {
        loading: false,
        results: fixture.events,
        pagination: fixture.pagination,
        error: false
      }
    };
    expect(appReducer(state, eventsFetched(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the eventsLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult: AppState = {
      eventsState: {
        loading: false,
        results: [],
        error: fixture
      }
    };

    expect(appReducer(state, eventsFetchError(fixture))).toEqual(
      expectedResult,
    );
  });
});
