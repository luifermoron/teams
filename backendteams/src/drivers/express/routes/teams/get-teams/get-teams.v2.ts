
import { Request, Response } from "express";
import TeamUseCases, { GET_ALL_RESPONSE } from "../../../../../application/useCases/v2/TeamUseCases";
import { sendSuccess } from "../../../../utils/response/responseHelper";
import { GET_ALL_TEAMS_SUCCES_RESPONSE_V2 } from "../../../../utils/response/responseMessages";


export default function getAllTeams(teamUseCasesV2: TeamUseCases) {
  return {
    getAll: async (req: Request, res: Response) => {
      const response: GET_ALL_RESPONSE = await teamUseCasesV2.getAllWithNewField();
      sendSuccess<GET_ALL_RESPONSE>(res, response, GET_ALL_TEAMS_SUCCES_RESPONSE_V2);
    },
  }
}