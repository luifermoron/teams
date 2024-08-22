
import ITeam from "../../../domain/entities/ITeam";
import TeamRepository from "../../../domain/respositories/FileSystemRepository/TeamRepository";
import AbstractUseCases from "../AbstractUseCase";

export default class TeamUseCasesV1 extends AbstractUseCases<
  ITeam,
  TeamRepository
> {

    constructor(teamsRepository: TeamRepository) {
        super(teamsRepository);
    }
}