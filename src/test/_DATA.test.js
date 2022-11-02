import { _saveQuestion } from '../utils/_DATA';

describe("_saveQuestion", () => {
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
