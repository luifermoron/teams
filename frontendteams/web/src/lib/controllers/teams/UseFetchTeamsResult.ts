import ITeam from "../../domain/entities/ITeam";

export type UseFetchTeamsResult = {
    teams: ITeam[]; 
    loading: boolean;
    refreshing: boolean;
}