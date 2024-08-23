
import { Request, Response } from "express";
import TeamUseCases from "../../../../../application/useCases/v1/TeamUseCases";
import { sendSuccess } from "../../../../utils/response/responseHelper";
import ITeam from "../../../../../domain/entities/ITeam";
import { GET_ALL_TEAMS_SUCCES_RESPONSE_V1 } from "../../../../utils/response/responseMessages";


export default function getAllTeams(teamUseCases: TeamUseCases) {
  return {
    getAll: async (req: Request, res: Response) => {
      const teams = await teamUseCases.getAll();
      sendSuccess<ITeam[]>(res, teams, GET_ALL_TEAMS_SUCCES_RESPONSE_V1);
    },
  }
}

