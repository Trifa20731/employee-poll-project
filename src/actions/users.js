export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWERED_RECORD = "ADD_ANSWERED_RECORD";
export const REMOVE_ANSWERED_RECORD = "REMOVE_ANSWERED_RECORD";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addAnsweredRecord({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWERED_RECORD,
    authedUser,
    qid,
    answer,
  };
}

export function removeAnsweredRecord({ authedUser, qid, answer }) {
  return {
    type: REMOVE_ANSWERED_RECORD,
    authedUser,
    qid,
    answer,
  }
}