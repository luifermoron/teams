import React from 'react';
import { render } from '@testing-library/react-native';
import TeamItem from '../teams/TeamItem';
import ITeam from '@/lib/domain/entities/ITeam';

describe('TeamItem Component', () => {
  it('should render team name correctly', () => {
    const team: ITeam = { id: 1, name: 'Team A', group: 'group', coach: 'coach' };

    const { getByText } = render(<TeamItem team={team} />);

    expect(getByText('Team A')).toBeTruthy();
  });
});