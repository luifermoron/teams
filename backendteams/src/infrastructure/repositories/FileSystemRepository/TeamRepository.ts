import FileSystemRepository from "./FileSystemRepository";
import ITeam from "../../../domain/entities/ITeam";
import { TEAM_CLASSNAME } from "../../../domain/repositories/Constants";

export default class TeamRepository extends FileSystemRepository<ITeam> {
    constructor() {
        super(TEAM_CLASSNAME);
    }
}