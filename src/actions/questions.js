export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function resetQuestion({ authedUser, qid, answer }) {
  return {
    type: RESET_QUESTION,
    authedUser,
    qid,
    answer,
  }
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}
