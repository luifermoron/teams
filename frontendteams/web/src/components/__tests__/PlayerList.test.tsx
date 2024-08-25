
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/lib/infrastructure/redux';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { GET_PLAYERS } from '@/lib/infrastructure/network/common/endpoints';
import { MemoryRouter } from 'react-router-dom';
import PlayerList from '../PlayerList';

let mock: MockAdapter;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

beforeEach(() => {
  mock.reset();
});

test('displays CircularProgress initially, then renders the list of teams and hides CircularProgress', async () => {
  mock.onGet(`${GET_PLAYERS}/2`).reply(200, {
    success: true,
    data: [
        { id: 1, name: 'Luis Suárez', position: 'Forward', age: 34, nationality: 'Uruguayan' },
        { id: 2, name: 'Edinson Cavani', position: 'Forward', age: 34, nationality: 'Uruguayan' },
    ],
    message: "test",
  });

  const { getAllByTestId, queryByTestId, getByTestId } = await waitFor(() =>
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PlayerList teamId={"2"}/>
            </MemoryRouter>
        </Provider>
    )
  );

  expect(getByTestId('progressbar')).toBeInTheDocument();

  await waitFor(() => {
    const teamItems = getAllByTestId('player-item');
    expect(teamItems.length).toBe(2);
  }, { timeout: 1700 });

  
  expect(queryByTestId('progressbar')).toBeNull();
});