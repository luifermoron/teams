import IPlayer from "@/lib/domain/entities/IPlayer";

export type UseFetchPlayersResult = {
    players: IPlayer[]; 
    loading: boolean;
    refreshing: boolean;
}