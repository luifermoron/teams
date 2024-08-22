import FileSystemRepository from "./FileSystemRepository";
import ITeam from "../../entities/ITeam";
import { TEAM_CLASSNAME } from "../Constants";

export default class TeamRepository extends FileSystemRepository<ITeam> {
    constructor() {
        super(TEAM_CLASSNAME);
    }
}