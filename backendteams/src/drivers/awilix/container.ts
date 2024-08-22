import { asClass, InjectionMode, createContainer } from 'awilix';
import TeamRepository from '../../domain/respositories/FileSystemRepository/TeamRepository';
import TeamUseCasesV1 from '../../application/useCases/v1/TeamUseCases';
import TeamUseCasesV2 from '../../application/useCases/v2/TeamUseCases';
import PlayerUseCasesV1 from '../../application/useCases/v1/PlayerUseCase';
import PlayerRepository from '../../domain/respositories/FileSystemRepository/PlayerRepository';

const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
    teamsRepository: asClass(TeamRepository)
    .singleton(),
    playersRepository: asClass(PlayerRepository)
    .singleton(),
    /*
        V1:
    */
    teamUseCases: asClass(TeamUseCasesV1).singleton(),
    playerUseCases: asClass(PlayerUseCasesV1).singleton(),
    /*
        V2:
    */
    teamUseCasesV2: asClass(TeamUseCasesV2).singleton(),
});

export default container;