
import ITeam from "../../../domain/entities/ITeam";
import TeamRepository from "../../../domain/respositories/FileSystemRepository/TeamRepository";
import AbstractUseCases from "../AbstractUseCase";

export type GET_ALL_RESPONSE = {
  newField: string,
  teams:ITeam[]
};

export default class TeamUseCasesV2 extends AbstractUseCases<
  ITeam,
  TeamRepository
> {

    constructor(teamsRepository: TeamRepository) {
        super(teamsRepository);
    }

    async getAllWithNewField(): Promise<GET_ALL_RESPONSE> {
      const teams = await this.getAll();
      return {
        newField: "Just an example",
        teams: teams,
      };
    }
}