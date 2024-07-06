import { useState } from 'react';

import Feedback from '../feedbacks/Feedback';
import Description from '../description/Description';
import Options from '../options/Options';
import s from './App.module.css';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  console.log(totalFeedback);

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  return (
    <>
      <Description />
      <Options onClick={updateFeedback} value={feedback} />
      {totalFeedback ? <Feedback value={feedback} /> : <h1>hello</h1>}
    </>
  );
}

export default App;
