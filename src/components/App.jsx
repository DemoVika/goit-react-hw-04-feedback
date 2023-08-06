import { useState } from 'react';
import { FeedbackOptions } from './feedbackOption/feedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import css from './app.module.css';
import { Notification } from 'components/notification/notification';

const reviews = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = state => {
    if (state === reviews.good) {
      setGood(prevState => prevState + 1);
    } else if (state === reviews.neutral) {
      setNeutral(prevState => prevState + 1);
    } else if (state === reviews.bad) {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = ({ good }) => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.values(reviews)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage({ good })}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
