import { useState } from 'react';

import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import { countTotalValue, countCurrentValuePercentage } from 'utils';
import options from '../../options';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function incrementStatFieldValueByName(name) {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  }

  const total = countTotalValue(good, neutral, bad);
  const positivePercentage = countCurrentValuePercentage(good, total);

  return (
    <Box
      p={3}
      bg="bgSecondary"
      width="25%"
      borderRadius="normal"
      border="default"
      borderColor="borderWarm"
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={incrementStatFieldValueByName}
        />
      </Section>
      <Box borderTop="default" borderColor="borderWarm">
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    </Box>
  );
}
