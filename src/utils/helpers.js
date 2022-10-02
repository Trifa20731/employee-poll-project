export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formateUser (userId, user) {
  const numOfAnswered = Object.keys(user.answers).length;
  const numOfCreated = user.questions.length;
  const avatarURL = user.avatarURL;
  const name = user.name;
  return {
    id: userId,
    name: name,
    avatarURL: avatarURL,
    numOfAnswered: numOfAnswered,
    numOfCreated: numOfCreated,
  };
}

export function formateQuestion () {
  
}

export function isQuestionAnsweredByUser(user, questionId) {
  var answersIds = [];
  var isAnswered = false;
  if (Object.entries(user.answers).length !== 0) {
    answersIds = Object.keys(user.answers).map(answer => answer);
    if(answersIds.includes(questionId)){
      isAnswered = false
    }
  }
  return {
    isAnswered
  };
}