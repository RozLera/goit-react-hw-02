import css from "./Options.module.css";
export default function Options({
  updateFeedback,
  resetFeedbak,
  types,
  total,
}) {
  return (
    <ul className={css.list}>
      {types.map((type) => (
        <li key={type}>
          <button
            className={css.button}
            type="button"
            onClick={() => updateFeedback(type)}
          >
            {type}
          </button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button
            className={css.resetButton}
            type="button"
            onClick={resetFeedbak}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
