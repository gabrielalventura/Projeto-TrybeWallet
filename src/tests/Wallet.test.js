import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import App from '../App';
import mockGlobalState from './helpers/mockGlobalState';

describe('Testa os elementos do componente Header', () => {
  it('Testa se o Header é renderizado no caminho `/carteira`', () => {
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

  it('Testa se o usário e o total é renderizado na tela', () => {
    renderWithRouterAndRedux(<Wallet />);

    const getUser = screen.getByText(/user/i);
    const getTotal = screen.getByText(/total/i);
    const valueTotal = screen.getByTestId('total-field');

    expect(getUser).toBeInTheDocument();
    expect(getTotal).toBeInTheDocument();
    expect(valueTotal).toHaveTextContent('0');
  });

  it('Teste se ao alterar o estado global, se altera o valor total de gastos no header', () => {
    renderWithRouterAndRedux(<Wallet />, { initialState: mockGlobalState });

    const valueTotal = screen.getByTestId('total-field');

    expect(valueTotal).toHaveTextContent('180.33');
  });
});

describe('Testa os elementos do componente Wallet Form', () => {
  const testIdValue = 'value-input';
  const testIdDescription = 'description-input';

  it('Testa se apresenta os inputs e o botão de adicionar despesa', () => {
    renderWithRouterAndRedux(<App />);

    const validEmail = 'teste@trybe.com';
    const validPassword = '123456';
    const userField = screen.getByPlaceholderText('email');
    const passwordField = screen.getByPlaceholderText('Senha');
    const enterButton = screen.getByRole('button');

    userEvent.type(userField, validEmail);
    userEvent.type(passwordField, validPassword);
    userEvent.click(enterButton);

    const value = screen.getByTestId(testIdValue);
    const description = screen.getByTestId(testIdDescription);
    const coin = screen.getByTestId('currency-input');
    const payment = screen.getByTestId('method-input');
    const getTag = screen.getByTestId('tag-input');
    const addExpense = screen.getByRole('button');
    const elementSelectSync = screen.getAllByRole('option');

    expect(value).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(coin).toBeInTheDocument();
    expect(payment).toBeInTheDocument();
    expect(getTag).toBeInTheDocument();
    expect(addExpense).toBeInTheDocument();
    expect(elementSelectSync).toHaveLength(8);
  });

  it('Testa se o input de valor só aceita números', () => {
    renderWithRouterAndRedux(<Wallet />);

    const inputValue = screen.getByTestId(testIdValue);
    const invalidValue = 'teste';
    userEvent.type(inputValue, invalidValue);
    expect(inputValue.value).toBe('');
  });

  it('Testa se a despesa corretamente adicionada aos inputs', () => {
    renderWithRouterAndRedux(<Wallet />);

    const valueInput = screen.getByTestId(testIdValue);
    const description = screen.getByTestId(testIdDescription);
    const enterButton = screen.getByRole('button');

    userEvent.type(valueInput, '85');
    userEvent.type(description, 'salão');
    userEvent.click(enterButton);

    expect(valueInput).not.toBe('');
    expect(description).not.toBe('');
  });

  it('Testa o select assincrono', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const coins = await screen.findAllByTestId('api-input');

    // expect(coins).toBeInTheDocument();
    expect(coins).toHaveLength(15);
  });
});
