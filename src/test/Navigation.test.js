import { render } from "@testing-library/react";
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../index';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Navigation from "../components/Navigation";

describe('Navigation Bar Test', ()=> {
  // Test 10.
  it('will have all expected link', () => {
    const component = render(
      <Provider store={store}>
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
    expect(logoutLink).toBeInTheDocument()
  });
});