import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../index';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from '../components/App';
import Login from '../components/login/Login';

describe('Login Page Test', ()=>{
  it('will have all expected filed', () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const userLabel = component.getAllByText(/User/);
    expect(userLabel.length).toEqual(1);
    const passwordLabel = component.getAllByText(/Password/);
    expect(passwordLabel.length).toEqual(1);

    var userNameInput = component.getByTestId('username-input');
    var passwordInput = component.getByTestId('password-input');
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    var submitButton = component.getByText('Submit')
    expect(submitButton).toBeInTheDocument();

  });

  it('will show the error message when enter wrong password', () => {

  });

  it('will show the error message when enter unexist username', () => {

  });
})