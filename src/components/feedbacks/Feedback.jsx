import s from './Feedback.module.css';
import { positivFeedback } from '../../helpers/mathPositivFeedback';

function Feedback({ value, total }) {
  return (
    <section>
      <ul className={s.feedbackList}>
        <li>Good 😀 : {value.good}</li>
        <li>Neutral 🤨 : {value.neutral}</li>
        <li>Bad 😢 : {value.bad}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positive: {positivFeedback(value.good, total)}</p>
    </section>
  );
}

export default Feedback;
