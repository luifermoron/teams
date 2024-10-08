import IPlayer from "@/lib/domain/entities/IPlayer";
import PlayerRepository from "@/lib/infrastructure/repositories/players/PlayerRepository";

export const getPlayersUseCase = async (teamId: number): Promise<IPlayer[]> => {
  const playerRepository = new PlayerRepository();
  return playerRepository.getByTeamId(teamId);
}
