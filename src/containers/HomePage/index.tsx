import * as React from 'react';
import {useMemo} from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import {makeSelectEventsState,} from '../App/selectors';
import {useSelector} from 'react-redux';
import {useInjectSaga} from 'redux-injectors';
import saga from './saga';
import EventsList from '../../components/EventsList';
import Select from '../../components/Select';
import {EVENT_TYPES} from '../App/eventTypes';
import {EventTypeSelectText, HomePageStyle, Pagination, Wrapper,} from './componentStyles';
import {useEventListHook} from './hooks';

const HOME_KEY = 'HOME_KEY';

const HomePage = () => {
  const eventsInfo = useSelector(makeSelectEventsState());

  useInjectSaga({key: HOME_KEY, saga: saga});

  /**
   * Here translations would be applied for values, for the test purposes
   * I just use the key as value.
   */
  const eventKeyValue = useMemo(
    () => EVENT_TYPES.map(type => ({key: type, value: type})),
    [],
  );

  const {onEventTypeChange, selectedKey, onNextPage} = useEventListHook(
    eventsInfo.pagination,
  );

  return (
    <HomePageStyle>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Wrapper>
        <EventTypeSelectText>
          {' '}
          <FormattedMessage {...messages.selectEventType} />
        </EventTypeSelectText>
        <Select
          items={eventKeyValue}
          onSelectChange={onEventTypeChange}
          selectedKey={selectedKey}
        />
      </Wrapper>

      <EventsList {...eventsInfo} />
      <Pagination>
        {eventsInfo.pagination?.next_page && (
          <button
            type="button"
            onClick={() => {
              onNextPage();
            }}
          >
            <FormattedMessage {...messages.nextPage} />
          </button>
        )}
        {/* It seems there is no provision for previous page in the same manner as next page. I suspect
      it is optimized for infinite scroll and will not be implementing previous page */}
      </Pagination>
    </HomePageStyle>
  );
};

export default HomePage;
