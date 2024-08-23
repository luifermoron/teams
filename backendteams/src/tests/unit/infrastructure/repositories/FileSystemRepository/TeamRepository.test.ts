import TeamRepository from '../../../../../infrastructure/repositories/FileSystemRepository/TeamRepository';

//TODO: give support to multiple databases & repositories setup
const fs = require('fs').promises;
jest.mock('fs', () => {
  return {
    promises: {
      readFile: jest.fn(),
    },
  };
});
const MOCK_DATABASE = JSON.stringify({ countries: [{ id: 1, name: "Spain", group: "H", coach: "Vicente del Bosque" }] });

describe('TeamRepository', () => {
  let teamRepository: TeamRepository;

  beforeEach(() => {
    teamRepository = new TeamRepository();
  });

  it('should return a list of teams from the file system', async () => {
    fs.readFile.mockReturnValue(MOCK_DATABASE); 
    const teams = await teamRepository.getAll();
    expect(teams).toEqual([{ id: 1, name: "Spain", group: "H", coach: "Vicente del Bosque" }]);
  });

  it('should handle errors when reading from the file system', async () => {
    (fs.readFile as jest.Mock).mockRejectedValueOnce(new Error('File not found'));

    await expect(teamRepository.getAll()).rejects.toThrow('File not found');
  });
});
