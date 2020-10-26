import React from 'react';
import {EventsState} from '../../containers/App/types';
import List from '../List';
import LoadingIndicator from '../LoadingIndicator';
import ListItem from '../ListItem';
import {EventListItem} from '../../containers/EventListItem';
import {FormattedMessage} from 'react-intl';
import messages from './messages';

interface Props extends EventsState {
}

function EventsList({results, error, loading}: Props) {
  if (loading) {
    return <List listComponent={LoadingIndicator}/>;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={<FormattedMessage {...messages.error} />}/>
    );
    return <List listComponent={ErrorComponent}/>;
  }
  if (results.length === 0) {
    const EmptyComponent = () => (
      <ListItem item={<FormattedMessage {...messages.empty} />}/>
    );
    return <List listComponent={EmptyComponent}/>;
  }
  if (results !== undefined) {
    return <List items={results} listComponent={EventListItem}/>;
  }

  return null;
}

export default EventsList;
