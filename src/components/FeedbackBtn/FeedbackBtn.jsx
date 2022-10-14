import PropTypes from 'prop-types';

import { getIconByType } from 'utils';
import { Btn } from './FeedbackBtn.styled';

export function FeedbackBtn({ feedbackType, onLeaveFeedback, ...allyProps }) {
  const BtnIcon = getIconByType(feedbackType);

  function onFeedbackBtnClick() {
    onLeaveFeedback(feedbackType);
  }

  return (
    <Btn type={feedbackType} onClick={onFeedbackBtnClick} {...allyProps}>
      <BtnIcon size="100%" />
    </Btn>
  );
}

FeedbackBtn.propTypes = {
  feedbackType: PropTypes.oneOf(['good', 'neutral', 'bad']),
  onLeaveFeedback: PropTypes.func.isRequired,
  'aria-label': PropTypes.string.isRequired,
};
