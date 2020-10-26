import {AppActions, AppState} from './types';
import ActionTypes from './constants';

export const initialState: AppState = {
  eventsState: {
    results: [],
    error: false,
    loading: false,
  },
};

function appReducer(
  state: AppState = initialState,
  action: AppActions,
): AppState {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS:
      return {
        eventsState: {
          loading: true,
          error: false,
          results: [],
        },
      };
    case ActionTypes.FETCH_EVENTS_SUCCESS:
      return {
        eventsState: {
          loading: false,
          error: state.eventsState.error,
          results: action.payload.response.events,
          pagination: action.payload.response.pagination,
        },
      };
    case ActionTypes.FETCH_EVENTS_ERROR:
      const {eventsState, ...rest} = state;
      return {
        eventsState: {
          ...eventsState,
          loading: false,
          error: action.payload,
        },
        ...rest,
      };
    default:
      return state;
  }
}

export default appReducer;
