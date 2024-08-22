
import IPlayer from "../../../domain/entities/IPlayer";
import PlayerRepository from "../../../domain/respositories/FileSystemRepository/PlayerRepository";
import AbstractUseCases from "../AbstractUseCase";

export default class PlayerUseCasesV1 extends AbstractUseCases<
  IPlayer,
  PlayerRepository
> {

    constructor(playersRepository: PlayerRepository) {
        super(playersRepository);
    }

    async getAllByTeam(idteam: number): Promise<IPlayer[]> {
      return this.repository.getAllByTeam(idteam);
    }
}