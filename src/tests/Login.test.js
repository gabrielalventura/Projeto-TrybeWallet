import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testa página de Login', () => {
  it('Testa se a página contém o titulo Login', () => {
    renderWithRouterAndRedux(<App />);

    const loginTitle = screen.getByRole('heading', { level: 2 }, { name: /login/i });

    expect(loginTitle).toBeInTheDocument();
  });

  it('Testa se a página é renderizada no caminho exato `/`', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const { pathname } = history.location;

    expect(pathname).toBe('/');
  });

  it('Testa se são renderizados os campos de email e senha para serem preenchidos', () => {
    renderWithRouterAndRedux(<App />);

    const userField = screen.getByPlaceholderText('email');
    const passwordField = screen.getByPlaceholderText('Senha');

    expect(userField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('Testa se há um botão de entrar e se o mesmo encontra-se desabilitado inicialmente', () => {
    renderWithRouterAndRedux(<App />);

    const enterButton = screen.getByRole('button');

    expect(enterButton).toBeInTheDocument();
    expect(enterButton).toBeDisabled();
  });

  it('Testa se o botão se mantem desabilitado em caso de email E senha invalida', () => {
    renderWithRouterAndRedux(<App />);

    const invalidEmail = 'testeteste.com';
    const invalidPassword = '1234';
    const userField = screen.getByPlaceholderText('email');
    const passwordField = screen.getByPlaceholderText('Senha');
    const enterButton = screen.getByRole('button');

    userEvent.type(userField, invalidEmail);
    userEvent.type(passwordField, invalidPassword);

    expect(userField).toHaveValue(invalidEmail);
    expect(passwordField).toHaveValue(invalidPassword);
    expect(enterButton).toBeDisabled();
  });

  it('Testa se o botão se mantem desabilitado em caso de email OU senha invalida', () => {
    renderWithRouterAndRedux(<App />);

    const invalidEmail = 'testetrybe.com';
    const validPassword = '123456';
    const userField = screen.getByPlaceholderText('email');
    const passwordField = screen.getByPlaceholderText('Senha');
    const enterButton = screen.getByRole('button');

    userEvent.type(userField, invalidEmail);
    userEvent.type(passwordField, validPassword);

    expect(userField).toHaveValue(invalidEmail);
    expect(passwordField).toHaveValue(validPassword);
    expect(enterButton).toBeDisabled();
  });

  it('Testa se quando preenchido com informações válidas, o botão de entrar torna-se habilitado', () => {
    renderWithRouterAndRedux(<App />);

    const validEmail = 'teste@trybe.com';
    const validPassword = '123456';
    const userField = screen.getByPlaceholderText('email');
    const passwordField = screen.getByPlaceholderText('Senha');
    const enterButton = screen.getByRole('button');

    userEvent.type(userField, validEmail);
    userEvent.type(passwordField, validPassword);

    expect(userField).toHaveValue(validEmail);
    expect(passwordField).toHaveValue(validPassword);
    expect(enterButton).not.toBeDisabled();
  });

  it('Testa se ao clicar no botão Entra a página é corretamente redirecionada para o caminho  `/carteira `', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const validEmail = 'teste@trybe.com';
    const validPassword = '123456';
    const userField = screen.getByPlaceholderText('email');
    const passwordField = screen.getByPlaceholderText('Senha');
    const enterButton = screen.getByRole('button');

    userEvent.type(userField, validEmail);
    userEvent.type(passwordField, validPassword);
    userEvent.click(enterButton);

    const { pathname } = history.location;

    expect(pathname).toBe('/carteira');
  });
});
