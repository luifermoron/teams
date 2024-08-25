import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '..';
import { store } from '@/lib/infrastructure/redux';
import { Provider } from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { GET_TEAMS } from '@/lib/infrastructure/network/common/endpoints';

let mock: MockAdapter;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

beforeEach(() => {
  // Reset the mock adapter before each test
  mock.reset();
});




test('fetches & displays teams after loading', async () => {
      mock.onGet(GET_TEAMS).reply(200, {
        success: true,
        data: [
          { id: 1, name: "Spain", group: "H", coach: "Vicente del Bosque" },
        ],
        message: "test",
      });

      const { queryByTestId, getByTestId } = await waitFor(() =>
        render(
          <Provider store={store}>
            <App />
          </Provider>
        )
      );

      expect(getByTestId('lottie-view')).toBeTruthy();

      await waitFor(() => {
        const flatList = getByTestId('teams-flatlist');
        expect(flatList.props.data.length).toBeGreaterThan(0);
      }, { timeout: 1700 });

      await waitFor(() => {
        expect(queryByTestId('lottie-view')).toBeNull();
      });
});