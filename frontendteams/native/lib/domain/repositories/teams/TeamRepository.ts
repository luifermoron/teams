import ITeam from "../../entities/ITeam";
import RemoteRepository from "../RemoteRepository";
import { GET_TEAMS } from "@/lib/drivers/network/common/endpoints";

export default class TeamRepository extends RemoteRepository<ITeam> {
    test() {
        console.log("This is just a sample that Repository can be extensible and implement its own methods");
    }

    async getAll(): Promise<ITeam[]> {
        return super.getAll(GET_TEAMS);
    }
}