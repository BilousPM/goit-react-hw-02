import s from './Feedback.module.css';

function Feedback() {
  return (
    <section>
      <ul className={s.feedbackList}>
        <li>Good 😀 :</li>
        <li>Neutral 🤨 :</li>
        <li>Bad 😢 :</li>
      </ul>
      <p>Total: </p>
      <p>Positive: </p>
    </section>
  );
}

export default Feedback;
