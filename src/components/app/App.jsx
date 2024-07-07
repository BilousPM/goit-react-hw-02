import { useEffect, useState } from 'react';

import Feedback from '../feedbacks/Feedback';
import Description from '../description/Description';
import Options from '../options/Options';
import s from './App.module.css';
import Notification from '../notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(
      window.localStorage.getItem('currentFeedback')
    );
    if (savedFeedback) {
      return savedFeedback;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () =>
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  useEffect(() => {
    window.localStorage.setItem('currentFeedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        onClick={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback value={feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
