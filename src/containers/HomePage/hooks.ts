import {fetchEvents} from '../App/actions';
import {useEffect, useState} from 'react';
import {EVENT_TYPES} from '../App/eventTypes';
import {useDispatch} from 'react-redux';
import {EventsPagination} from '../App/types';

const startKey = EVENT_TYPES[0];

export const useEventListHook = (eventsPagination?: EventsPagination) => {
  /**
   * Set first event type from the list as selected.
   */
  const [selectedKey, setSelectedKey] = useState(startKey);
  const dispatch = useDispatch();

  const onEventTypeChange = (typeKey: string) => {
    setSelectedKey(typeKey);
    dispatch(
      fetchEvents({
        type: typeKey,
      }),
    );
  };

  /**
   * Load events for preselected key
   */
  useEffect(() => {
    dispatch(
      fetchEvents({
        type: startKey,
      }),
    );
  }, [dispatch]);

  const onNextPage = () => {
    dispatch(
      fetchEvents({
        paginationUrl: eventsPagination?.next_page,
      }),
    );
  };

  return {selectedKey, onEventTypeChange, onNextPage};
};
