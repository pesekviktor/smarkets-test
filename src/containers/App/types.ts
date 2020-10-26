import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

export interface AppState {
  readonly eventsState: EventsState;
}

export interface EventsPagination {
  /**
   * Pagination string tells where to go for next page
   */
  next_page: string;
}

export interface EventsResponse {
  events: SmarketsEvent[];
  pagination?: EventsPagination;
}

export interface SmarketsEvent {
  id: string;
  name: string;
  short_name?: string;
  start_datetime: string;
  description: string;
}

export interface EventsState {
  /**
   * In more complex project setup I prefer to use
   * an enumerated state (by TS) (INIT, FETCHING, ERROR) which can be extended
   * rather then loading.
   */
  loading: boolean;
  readonly error?: object | boolean;
  results: SmarketsEvent[];
  pagination?: EventsPagination;
}

export interface EventFilter {
  type?: string;
  paginationUrl?: string;
}

/* --- ACTIONS --- */
export type AppActions = ActionType<typeof actions>;
