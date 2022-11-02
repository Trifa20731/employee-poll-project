import * as React from 'react';
import { render } from '@testing-library/react';
import AnsweredQuestionCard from '../components/question/AnsweredQuestionCard';

describe('AnsweredQuestionCard', () => {
  it('matches the sanpshot when all parameter passes', () => {
    const component = render(
      <AnsweredQuestionCard
        optionText = 'deploy to production once every two weeks'
        optionVotePeopleAmount = {2}
        totalVoteAmount = {10}
      />
    );
    expect(component).toMatchSnapshot();
  });
});