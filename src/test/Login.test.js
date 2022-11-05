import { fireEvent, render, waitFor } from '@testing-library/react';
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

    const userNameInput = component.getByTestId('username-input');
    const passwordInput = component.getByTestId('password-input');
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const submitButton = component.getByText('Submit')
    expect(submitButton).toBeInTheDocument();

  });

  it('will show the error message when enter wrong password', async () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const userNameInput = component.getByTestId('username-input');
    const passwordInput = component.getByTestId('password-input');
    const submitButton = component.getByTestId('submit-button');

    fireEvent.click(userNameInput, { target: { value: 'tylermcginnis' } });
    fireEvent.click(passwordInput, { target: { value: '123' } });

    await waitFor(() => {
      expect(userNameInput.value).toBe('tylermcginnis');
      expect(passwordInput.value).toBe('123');
      fireEvent.click(submitButton);
      const failLoginMsg = component.getByText('wrong password');
      expect(failLoginMsg).toBeInTheDocument();
    });


  });

  it('will show the error message when enter unexist username', async () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    const userNameInput = component.getByTestId('username-input');
    const passwordInput = component.getByTestId('password-input');
    const submitButton = component.getByTestId('submit-button');

    fireEvent.click(userNameInput, { target: { value: 'abc' } });
    fireEvent.click(passwordInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      //const errorMessage = component.getByText('unexist user.');
      //expect(errorMessage).toBeInTheDocument(); 
    });
  });
})