import PlayerRepository from '../../../../../infrastructure/repositories/FileSystemRepository/PlayerRepository';

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

describe('PlayerRepository', () => {
  let playerRepository: PlayerRepository;

  beforeEach(() => {
    playerRepository = new PlayerRepository();
  });

  it('should return a list of players based on team Id from the file system', async () => {
    fs.readFile.mockReturnValue(MOCK_DATABASE); 
    const teamId = 1;
    const players = await playerRepository.getAllByTeam(teamId);
    expect(players).toEqual([{ id: 101, name: "Iker Casillas", position: "Goalkeeper", age: 29, nationality: "Spanish", team: 1 }]);
  });

  it('should handle errors when reading from the file system', async () => {
    (fs.readFile as jest.Mock).mockRejectedValueOnce(new Error('File not found'));

    await expect(playerRepository.getAll()).rejects.toThrow('File not found');
  });
});
