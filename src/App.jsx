import { useEffect, useState } from "react";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

import "./App.css";

export default function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(
    () => JSON.parse(localStorage.getItem("feedback")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  function updateFeedback(type) {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  }

  function resetFeedbak() {
    setFeedback(initialState);
  }

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedbak={resetFeedbak}
        total={totalFeedback}
        types={Object.keys(feedback)}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={[
            ...Object.entries(feedback),
            ["total", totalFeedback],
            ["positive", positiveFeedback + "%"],
          ]}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
