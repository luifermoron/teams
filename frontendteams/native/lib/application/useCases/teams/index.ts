import ITeam from "@/lib/domain/entities/ITeam";
import TeamRepository from "@/lib/domain/repositories/teams/TeamRepository";

export const getTeamsUseCase = async (currentTeams: ITeam[]): Promise<ITeam[]> => {
  const teamRepository = new TeamRepository();
  return teamRepository.getAll();
}
