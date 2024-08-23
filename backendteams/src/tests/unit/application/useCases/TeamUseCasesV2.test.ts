
import TeamUseCasesV2 from '../../../../application/useCases/v2/TeamUseCases';
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

describe('TeamUseCases V2', () => {
  let teamUseCases: TeamUseCasesV2;

  beforeEach(() => {
    teamUseCases = new TeamUseCasesV2(new TeamRepository());
  });

  it('should return a list of teams with a new field', async () => {
    const mockTeams = [{ id: 1, name: "Spain", group: "H", coach: "Vicente del Bosque" }];
    fs.readFile.mockReturnValue(MOCK_DATABASE); 
    
    const teams = await teamUseCases.getAllWithNewField();
    const newFieldObj = {
        newField: "Just an example"
    };
    expect({...newFieldObj, teams}).toEqual({...newFieldObj, teams});
  });
});