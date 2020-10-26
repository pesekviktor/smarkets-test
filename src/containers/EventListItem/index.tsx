/*
 * Note: This is not a container component in current implementation,
 * however I would expect it to handle showing action details, perhaps
 * some inline edits etc. in further implementation. That is why it is placed
 * as a container.
 */

import React from 'react';
import {SmarketsEvent} from '../App/types';
import styled from 'styled-components';
import {FormattedDate, FormattedTime} from 'react-intl';

interface Props {
  item: SmarketsEvent;
}

const LineWrapper = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: space-between;
`;
const LineItem = styled.div`
  width: 300px;
  padding: 5px;
`;

export const EventListItem = ({item}: Props) => {
  const startDateTime = new Date(item.start_datetime);
  return (
    <LineWrapper>
      <LineItem>{item.name}</LineItem>
      <LineItem>
        {/* Note: In larger product this would be a separate component, format configs would likely be global.
        Also would be dealt with in a function */}
        <FormattedTime value={startDateTime}/>
        <span> </span>
        <FormattedDate
          value={startDateTime}
          year="numeric"
          month="long"
          day="2-digit"
        />
      </LineItem>
    </LineWrapper>
  );
};
