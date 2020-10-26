import {defineMessages} from 'react-intl';

export const scope = 'app.components.EventsList';

export default defineMessages({
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Something went wrong',
  },
  empty: {
    id: `${scope}.empty`,
    defaultMessage: 'No items to show',
  },
});
