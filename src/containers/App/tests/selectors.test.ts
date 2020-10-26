import {makeSelectEvents} from '../selectors';
import {ApplicationRootState} from '../../../types';


describe('makeSelectEvents', () => {
  it('should select events fetched', () => {
    const currentUserSelector = makeSelectEvents();
    const results = [{
      short_name: 'test'
    }];
    const mockedState = {
      appState: {
        eventsState: {
          results: results
        }
      },
    } as ApplicationRootState;
    expect(currentUserSelector(mockedState)).toEqual(results);
  });
});
// And further similar tests
