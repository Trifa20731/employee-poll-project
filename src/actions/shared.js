import { getInitialData, saveQuestionAnswer, saveQuestion } from "../utils/api";
import {
  receiveUsers,
  addAnsweredRecord,
  removeAnsweredRecord,
  saveUserQuestionRecord,
} from "./users";
import {
  receiveQuestions,
  answerQuestion,
  resetQuestion,
  createQuestion,
} from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";


export function handleSetAuthedUser(user) {
  return (dispatch) => {
    return dispatch(setAuthedUser(user));
  };
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));
    dispatch(addAnsweredRecord(info));
    return saveQuestionAnswer(info).catch((e) => {
      console.warn("error in handle answer question " + e);
      resetQuestion(info);
      removeAnsweredRecord(info);
      alert("There is an error in answering question. Try again.");
    });
  };
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(question)
      .then((question) => {
        dispatch(createQuestion(question));
        dispatch(saveUserQuestionRecord(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}
