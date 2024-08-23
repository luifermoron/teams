import { GET_PLAYERS } from "@/lib/infrastructure/network/common/endpoints";
import IPlayer from "@/lib/domain/entities/IPlayer";
import RemoteRepository from "../RemoteRepository";

export default class PlayerRepository extends RemoteRepository<IPlayer> {

    async getAll(): Promise<IPlayer[]> {
        return super.getAll(GET_PLAYERS);
    }

    async getByTeamId(teamId: number): Promise<IPlayer[]> {
        return super.getAll(GET_PLAYERS + `/${teamId}`);
    }

    test() {
        console.log("This is just a sample that Repository can be extensible and implement its own methods");
    }
}