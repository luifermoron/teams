import React, { PropsWithChildren } from 'react';
import { render, waitFor } from '@testing-library/react-native';
import PlayersScreen from './[id]';
import { Provider } from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { store } from '@/lib/infrastructure/redux';
import { GET_PLAYERS } from '@/lib/infrastructure/network/common/endpoints';


let mock: MockAdapter;

jest.mock('expo-router', () => ({
    ...jest.requireActual('expo-router'),
    useLocalSearchParams: jest.fn(),
    useNavigation: jest.fn(),
}));

beforeAll(() => {
  mock = new MockAdapter(axios);
});

beforeEach(() => {
  mock.reset();
  require('expo-router').useLocalSearchParams.mockReturnValue({
    id: '2',
    name: 'Uruguay',
  });
  require('expo-router').useNavigation.mockReturnValue({
    setOptions: jest.fn(),
  });
});


test('Display Animation while loading, then displays FlatList of players and hides Animation', async () => {
  mock.onGet(`${GET_PLAYERS}/2`).reply(200, {
    success: true,
    data: [
      { id: 1, name: 'Luis Suárez', position: 'Forward', age: 34, nationality: 'Uruguayan' },
      { id: 2, name: 'Edinson Cavani', position: 'Forward', age: 34, nationality: 'Uruguayan' },
    ],
    message: 'test',
  });

  const { queryByTestId, getByTestId } = await waitFor(() =>
    render(<Provider store={store}>
            <PlayersScreen  />
          </Provider>
        )
  );


  expect(getByTestId('lottie-view')).toBeTruthy();

  await waitFor(() => {
    const flatList = getByTestId('players-flatlist');
    expect(flatList.props.data.length).toBeGreaterThan(0);
  }, { timeout: 1700 });

  await waitFor(() => {
    expect(queryByTestId('lottie-view')).toBeNull();
  });
});
