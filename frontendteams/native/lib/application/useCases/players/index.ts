import IPlayer from "@/lib/domain/entities/IPlayer";
import PlayerRepository from "@/lib/infraestructure/repositories/players/PlayerRepository";

export const getPlayersUseCase = async (teamId: number): Promise<IPlayer[]> => {
  const playerRepository = new PlayerRepository();
  return playerRepository.getByTeamId(teamId);
}
