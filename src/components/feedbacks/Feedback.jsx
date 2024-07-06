import s from './Feedback.module.css';

function Feedback({ value }) {
  return (
    <section>
      <ul className={s.feedbackList}>
        <li>Good 😀 : {value.good}</li>
        <li>Neutral 🤨 : {value.neutral}</li>
        <li>Bad 😢 : {value.bad}</li>
      </ul>
      <p>Total: </p>
      <p>Positive: </p>
    </section>
  );
}

export default Feedback;
