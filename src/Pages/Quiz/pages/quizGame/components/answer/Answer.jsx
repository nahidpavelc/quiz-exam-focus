import './answer.module.css';
const Answer = ({ answer, index, onSelectAnswer, selectedAnswer, correctAnswer, askedHelp }) => {
  const answerLetterMapping = ['A', 'B', 'C', 'D'];
  const isCorrect = selectedAnswer
    &&
    correctAnswer
    ===
    answer
    ? "correct-answer"
    : null;
  const isWrong = selectedAnswer
    &&
    selectedAnswer
    ===
    answer
    &&
    answer
    !==
    correctAnswer
    ? "wrong-answer"
    : null;
  const isDisabled = selectedAnswer ? "disabled-answer" : null;
  const help = askedHelp
    &&
    !selectedAnswer
    &&
    answer === correctAnswer
    ? "help-answer"
    : null;
  return (<>
    <div className={`answer ${isCorrect} ${isWrong} ${isDisabled} ${help}`} onClick={() => onSelectAnswer(answer)}>
      <div className="answer-option">
        <div className="answer-letter"><p>{answerLetterMapping.at(index)}</p></div>
        <div className="answer-text"><p>{answer}</p></div>
      </div>
    </div>
  </>);
};
export default Answer;
