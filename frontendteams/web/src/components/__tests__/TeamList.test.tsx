
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import TeamList from '../TeamList';
import { store } from '@/lib/infrastructure/redux';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { GET_TEAMS } from '@/lib/infrastructure/network/common/endpoints';
import { MemoryRouter } from 'react-router-dom';

let mock: MockAdapter;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

beforeEach(() => {
  mock.reset();
});

test('displays CircularProgress initially, then renders the list of teams and hides CircularProgress', async () => {
  mock.onGet(GET_TEAMS).reply(200, {
    success: true,
    data: [
      { id: 1, name: "Team A", group: "Group 1", coach: "Coach A" },
      { id: 2, name: "Team B", group: "Group 2", coach: "Coach B" },
    ],
    message: "test",
  });

  const { getAllByTestId, queryByTestId, getByTestId } = await waitFor(() =>
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TeamList />
            </MemoryRouter>
        </Provider>
    )
  );

  expect(getByTestId('progressbar')).toBeInTheDocument();

  await waitFor(() => {
    const teamItems = getAllByTestId('team-item');
    expect(teamItems.length).toBe(2);
  }, { timeout: 1700 });

  
  expect(queryByTestId('progressbar')).toBeNull();
});

