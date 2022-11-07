import { fireEvent, render, waitFor } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../index';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Login from '../components/login/Login';

describe('Login Page Test', ()=>{
  // Test 6
  it('will show correct input in the test input', async () => {
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

    expect(userNameInput.value).toMatch("");
    expect(passwordInput.value).toMatch("");
    fireEvent.change(userNameInput, { target: { value: 'tylermcginnis' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    expect(userNameInput.value).toMatch("tylermcginnis");
    expect(passwordInput.value).toMatch("123");
  });
  // Test 7.
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
  // Test 8.
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

    expect(userNameInput.value).toMatch("");
    expect(passwordInput.value).toMatch("");
    fireEvent.change(userNameInput, { target: { value: 'abc' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    expect(userNameInput.value).toMatch("abc");
    expect(passwordInput.value).toMatch("123");
    fireEvent.click(submitButton);
    const errorMessage = component.getByText('unexist user.');
    expect(errorMessage).toBeInTheDocument(); 
  });
  // Test 10.
  it('will check the button is disable when username and password is empty', () => {
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

    expect(userNameInput.value).toMatch("");
    expect(passwordInput.value).toMatch("");
    expect(submitButton).toBeDisabled();
  });
})