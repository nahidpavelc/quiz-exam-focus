import { Questions as questions } from "../randomdata";
import shuffleAnswers from "../helpers/suffleAnswers";
import { createContext, useReducer } from 'react';
import Question from "../pages/quizGame/components/question/Question";
export var allowedActions;
(function (allowedActions) {
  allowedActions[allowedActions["NEXT_QUESTION"] = 0] = "NEXT_QUESTION";
  allowedActions[allowedActions["SELECT_ANSWER"] = 1] = "SELECT_ANSWER";
  allowedActions[allowedActions["RESET_GAME"] = 2] = "RESET_GAME";
  allowedActions[allowedActions["ASK_HELP"] = 3] = "ASK_HELP";
})(allowedActions || (allowedActions = {}));
export const QuizContext = createContext(null);
const initialState = {
  questions,
  currentQuestionIndex: 0,
  currentQuestionAnswers: shuffleAnswers([...questions.at(0).wrongAnswers, questions.at(0).correctAnswer]),
  correctAnswer: questions.at(0)?.correctAnswer,
  selectedAnswer: null,
  assertedAnswersCount: 0,
  helpChances: 3,
  askedHelp: false,
  life: 3,
  score: 0,
  gameOver: false,
};
function getScore() {
  const score = Math.floor(Math.random() * (200 - 100) + 100);
  return score;
}
function QuizReducer(state, action) {
  switch (action.type) {
    case allowedActions.NEXT_QUESTION: {
      const gameOver = (state.questions.length - 1)
        ===
        state.currentQuestionIndex
        ? true : false;
      const currentQuestionIndex = gameOver
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const currentQuestionAnswers = gameOver
        ? []
        : shuffleAnswers([...state.questions.at(state.currentQuestionIndex + 1).wrongAnswers, state.questions.at(state.currentQuestionIndex + 1).correctAnswer]);
      const correctAnswer = state.questions
        .at(state.currentQuestionIndex + 1)
        ?.correctAnswer;
      const askedHelp = false;
      return {
        ...state,
        currentQuestionAnswers,
        currentQuestionIndex,
        correctAnswer,
        selectedAnswer: null,
        askedHelp,
        gameOver,
      };
    }
    case allowedActions.SELECT_ANSWER: {
      const selectedAnswer = action.payload;
      const assertedAnswersCount = state.questions.at(state.currentQuestionIndex)?.correctAnswer
        ===
        selectedAnswer
        ? state.assertedAnswersCount + 1
        : state.assertedAnswersCount;
      const score = state.questions.at(state.currentQuestionIndex)?.correctAnswer
        ===
        selectedAnswer
        ? state.score + getScore()
        : state.score;
      const life = state.questions.at(state.currentQuestionIndex)?.correctAnswer
        !==
        selectedAnswer
        ? state.life - 1
        : state.life;
      const gameOver = life <= 0 ? true : state.gameOver;
      return {
        ...state,
        selectedAnswer,
        assertedAnswersCount,
        askedHelp: false,
        score,
        life,
        gameOver
      };
    }
    case allowedActions.ASK_HELP: {
      const helpChances = state.helpChances
        &&! state.askedHelp
        &&! state.selectedAnswer
        && state.helpChances > 0
        ? state.helpChances - 1
        : state.helpChances;
      return {
        ...state,
        helpChances,
        askedHelp: true
      };
    }
    case allowedActions.RESET_GAME: return initialState;
    default: return state;
  }
}
export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>);
    <Question NEXT_QUESTION={NEXT_QUESTION}></Question>
};
