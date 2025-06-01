import css from "./Feedback.module.css";

export default function Feedback({ feedback }) {
  return (
    <ul className={css.list}>
      {feedback.map(([type, value]) => (
        <li className={css.item} key={type}>
          <p className={css.label}>{type} </p>
          <p className={css.quantity}>{value}</p>
        </li>
      ))}
    </ul>
  );
}
