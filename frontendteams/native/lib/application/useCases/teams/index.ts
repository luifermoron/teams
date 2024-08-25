import ITeam from "@/lib/domain/entities/ITeam";
import TeamRepository from "@/lib/infrastructure/repositories/teams/TeamRepository";
// @ts-ignore
export const getTeamsUseCase = async (currentTeams: ITeam[]): Promise<ITeam[]> => {
  const teamRepository = new TeamRepository();
  return teamRepository.getAll();
}
