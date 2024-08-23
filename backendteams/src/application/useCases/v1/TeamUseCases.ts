
import ITeam from "../../../domain/entities/ITeam";
import TeamRepository from "../../../infraestructure/repositories/FileSystemRepository/TeamRepository";
import AbstractUseCases from "../AbstractUseCase";

export default class TeamUseCasesV1 extends AbstractUseCases<
  ITeam,
  TeamRepository
> {

    constructor(teamsRepository: TeamRepository) {
        super(teamsRepository);
    }
}