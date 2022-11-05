import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

describe("_saveQuestion", () => {
  // Test 1.
  it("will return format question if options and author are not null", async () => {
    const availableQuestion = {
      optionOneText: "Go to Japan",
      optionTwoText: "Go to China",
      author: "zoshikanlu"
    }
    var result = await _saveQuestion(availableQuestion);
    expect(result.author).toEqual("zoshikanlu");
    expect(result.optionOne.text).toEqual("Go to Japan");
    expect(result.optionTwo.text).toEqual("Go to China");
  });
  // Test 2.
  it("will return an error message if author is undefined", async () => {
    const unavailableQuestion = {
      optionOneText: "Go to Japan",
      optionTwoText: "Go to China",
    }
    await expect(_saveQuestion(unavailableQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  // Test 3.
  it("will return true of authedUser, qid and answer are not undefined", async () => {
    const availableQuestionAnswer = {
      authedUser: "tylermcginnis",
      qid: "am8ehyc8byjqgar0jgpub9",
      answer: "optionOne"
    }
    var result = await _saveQuestionAnswer(availableQuestionAnswer);
    expect(result).toEqual(true);
  });
  // Test 4.
  it("will return an error message if answer is undefined.", async () => {
    const unavailableQuestionAnswer = {
      authedUser: "tylermcginnis",
      qid: "am8ehyc8byjqgar0jgpub9",
    }
    await expect(_saveQuestionAnswer(unavailableQuestionAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );    
  });
});