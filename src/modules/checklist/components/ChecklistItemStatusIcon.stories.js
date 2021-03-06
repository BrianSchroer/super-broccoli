import React from 'react';
import {
  storiesOf,
  storybookFrameDecorator,
  infoDecorator
} from '../../../../tools/storybook';
import { checklistItemStatus } from '../../checklist';
import ChecklistItemStatusIcon from './ChecklistItemStatusIcon';

storiesOf('ChecklistItemStatusIcon', module)
  .addDecorator(infoDecorator)
  .addDecorator(storybookFrameDecorator)
  .add('icons', () => (
    <ul className="list-unstyled">
      {checklistItemStatus.options.map(opt => (
        <li key={opt.value}>
          <ChecklistItemStatusIcon status={opt.value} /> {opt.text}
        </li>
      ))}
    </ul>
  ));
