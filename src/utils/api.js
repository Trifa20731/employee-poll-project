import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getUsers () {
  return _getUsers.then((users) => {
    console.log(users)
  })
}

export function getQuestions () {
  return _getQuestions.then((questions) => {
    console.log(questions)
  })
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
  return saveQuestionAnswer(info)
}