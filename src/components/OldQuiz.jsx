import { useState } from 'react';

import QUESTIONS from "../questions.js";

export default function OldQuiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  
  let cssClass;

  function handleSelect() {
    cssClass="selected";
  }

  // if (selected) {
  //   cssClass = "selected";
  // } else if (correct) {
  //   cssClass = "correct";
  // } else if (wrong) {
  //   cssClass = "wrong";
  // }

  return (
    <>
      {QUESTIONS.map((question) => (
        <div id="quiz" key={question.id}>
          <div id="question">
            <progress />
            <h2>{question.text}</h2>
          </div>
          <ul id="answers">
            <li className="answer">
              <button className={cssClass} onClick={handleSelect} >{question.answers[0]}</button>
            </li>
            <li className="answer">
              <button>{question.answers[1]}</button>
            </li>
            <li className="answer">
              <button>{question.answers[2]}</button>
            </li>
            <li className="answer">
              <button>{question.answers[3]}</button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
