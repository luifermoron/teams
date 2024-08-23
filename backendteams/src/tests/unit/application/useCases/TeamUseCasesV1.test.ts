
import TeamUseCasesV1 from '../../../../application/useCases/v1/TeamUseCases';
import TeamRepository from '../../../../infrastructure/repositories/FileSystemRepository/TeamRepository';

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

describe('TeamUseCases V1', () => {
  let teamUseCases: TeamUseCasesV1;

  beforeEach(() => {
    teamUseCases = new TeamUseCasesV1(new TeamRepository());
  });

  it('should return a list of teams', async () => {
    const mockTeams = [{ id: 1, name: "Spain", group: "H", coach: "Vicente del Bosque" }];
    fs.readFile.mockReturnValue(MOCK_DATABASE); 
    
    const teams = await teamUseCases.getAll();
    expect(teams).toEqual(mockTeams);
  });
});