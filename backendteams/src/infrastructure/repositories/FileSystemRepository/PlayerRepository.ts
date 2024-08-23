import FileSystemRepository from "./FileSystemRepository";
import { PLAYER_CLASSNAME } from "../../../domain/repositories/Constants";
import IPlayer from "../../../domain/entities/IPlayer";

export default class PlayerRepository extends FileSystemRepository<IPlayer> {
    constructor() {
        super(PLAYER_CLASSNAME);
    }

    async getAllByTeam(idteam: number): Promise<IPlayer[]> {
        const all = await this.getAll();
        
        return all.filter( player => player.team === idteam);
    }
}