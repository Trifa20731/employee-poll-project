import {
  RECEIVE_USERS,
  ADD_ANSWERED_RECORD,
  REMOVE_ANSWERED_RECORD,
  SAVE_USER_QUESTION_RECORD
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWERED_RECORD:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: [action.answers],
          }
        }
      }
    case REMOVE_ANSWERED_RECORD:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: Object.entries(state[action.authedUser].answers).filter(
            ([key, value]) => key !== [action.qid]
          )
        }
      }
    case SAVE_USER_QUESTION_RECORD:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default:
      return state;
  }
}
