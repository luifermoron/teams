
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import TeamItem from '../TeamItem';
import { MemoryRouter } from 'react-router-dom';
import ITeam from '../../lib/domain/entities/ITeam';


describe('TeamItem Component', () => {
  const mockTeam = {
    id: 1,
    name: 'Team A',
    group: 'Group 1',
    coach: 'Coach A',
  } as ITeam;

  test('renders team name, group, and coach', () => {
    render(
      <MemoryRouter>
        <TeamItem
          team={mockTeam}
        />
      </MemoryRouter>
    );


    expect(screen.getByText('Team A')).toBeTruthy();
    expect(screen.getByText('Group: Group 1')).toBeTruthy();
    expect(screen.getByText('Coach: Coach A')).toBeTruthy();
  });
});
