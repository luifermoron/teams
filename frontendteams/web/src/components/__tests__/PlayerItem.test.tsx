import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import PlayerItem from '../PlayerItem';
import IPlayer from '../../lib/domain/entities/IPlayer';

describe('PlayerItem Component', () => {
  const mockPlayer = {
    id: 1,
    name: 'Player A',
    position: 'Forward',
    age: 28,
    nationality: 'Country A',
  } as IPlayer;

  test('renders player name, position, age, number, and nationality', () => {
    render(
      <PlayerItem
        player={mockPlayer}
      />
    );

    expect(screen.getByText('Player A')).toBeTruthy();
    expect(screen.getByText('Position: Forward')).toBeTruthy();
    expect(screen.getByText('Age: 28')).toBeTruthy();
    expect(screen.getByText('Nationality: Country A')).toBeTruthy();
  });
});
