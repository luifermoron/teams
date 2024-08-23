import IPlayer from "../entities/IPlayer";
import ITeam from "../entities/ITeam";

export default interface PerformanceService {
    bestTeams(): Promise<ITeam[]>;
    bestPlayers(): Promise<IPlayer[]>;
}