import PropTypes from 'prop-types';

import { FeedbackBtn } from 'components/FeedbackBtn';
import {
  BtnGroup,
  BtnGroupItem,
  FeedbackLabel,
} from './FeedbackOptions.styled';

export function FeedbackOptions({ options, ...restProps }) {
  return (
    <BtnGroup>
      {options.map(option => (
        <BtnGroupItem key={option}>
          <FeedbackBtn
            feedbackType={option}
            {...restProps}
            aria-label={`Leave ${option} feedback button`}
          />
          <FeedbackLabel>{option}</FeedbackLabel>
        </BtnGroupItem>
      ))}
    </BtnGroup>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func.isRequired,
};
