/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import {defineMessages} from 'react-intl';

export const scope = 'app.containers.HomePage';

/**
 * For the purpose of this task I have not been filling the language files, using just default messages
 */
export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: '',
  },
  selectEventType: {
    id: `${scope}.selectEventType`,
    defaultMessage: 'Select event type',
  },
  nextPage: {
    id: `${scope}.selectEventType`,
    defaultMessage: 'Next page',
  },
});
