import ITeam from "./ITeam";

export default interface IPlayer {
    id: number;
    name: string;
    position: string;
    age: number;
    nationality: string;
    team: number | ITeam;
}