
import PlayerUseCases from '../../../../application/useCases/v1/PlayerUseCase';
import PlayerRepository from '../../../../infrastructure/repositories/FileSystemRepository/PlayerRepository';

//TODO: give support to multiple databases & repositories setup
const fs = require('fs').promises;
jest.mock('fs', () => {
  return {
    promises: {
      readFile: jest.fn(),
    },
  };
});
const MOCK_DATABASE = JSON.stringify({ players: [{ id: 101, name: "Iker Casillas", position: "Goalkeeper", age: 29, nationality: "Spanish", team: 1 }] });

describe('PlayerUseCases V1', () => {
  let playerUseCases: PlayerUseCases;

  beforeEach(() => {
    playerUseCases = new PlayerUseCases(new PlayerRepository());
  });

  it('should return a list of players', async () => {
    const mockPlayers = [{ id: 101, name: "Iker Casillas", position: "Goalkeeper", age: 29, nationality: "Spanish", team: 1 }];
    fs.readFile.mockReturnValue(MOCK_DATABASE); 

    const teamId = 1;
    const players = await playerUseCases.getAllByTeam(teamId);
    expect(players).toEqual(mockPlayers);
  });
});