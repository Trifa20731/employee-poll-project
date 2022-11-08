import { render } from "@testing-library/react";
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Navigation from "../components/Navigation";

const mockStore = configureStore([]);

describe('Navigation Bar Test', ()=> {

  var mockedStore = null

  beforeEach(() => {
    mockedStore = mockStore({
      authedUser: {
        id: 'sarahedo',
        password:'password123',
        name: 'Sarah Edo',
        avatarURL: 'https://cdn-icons-png.flaticon.com/512/4472/4472533.png',
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
    });
  });

  // Test 10.
  it('will have all expected link', () => {

    const component = render(
      <Provider store={mockedStore}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Provider>
    )

    const homeLink = component.getByTestId('home-link');
    const leaderboardLink = component.getByTestId('leaderboard-link');
    const newLink = component.getByTestId('new-link');
    const logoutLink = component.getByTestId('logout-link');

    expect(homeLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
    expect(newLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();

    expect(homeLink.href).toBe("http://localhost/home");
    expect(leaderboardLink.href).toBe("http://localhost/leaderboard");
    expect(newLink.href).toBe("http://localhost/add");
    expect(logoutLink.href).toBe("http://localhost/");

  });
});