
import { Request, Response } from "express";
import { sendSuccess } from "../../../../utils/response/responseHelper";
import IPlayer from "../../../../../domain/entities/IPlayer";
import { GET_ALL_PLAYERS_SUCCESS_RESPONSE_V1 } from "../../../../utils/response/responseMessages";
import PlayerUseCases from "../../../../../application/useCases/v1/PlayerUseCase";


type GET_BY_TEAM = {
  team_id: string;
};

interface GetByTeamRequest extends Request {
  query: GET_BY_TEAM
}

export default function getAllPlayers(playerUseCases: PlayerUseCases) {
  return {
    getAll: async (req: Request, res: Response) => {
      const players = await playerUseCases.getAll();
      sendSuccess<IPlayer[]>(res, players, GET_ALL_PLAYERS_SUCCESS_RESPONSE_V1);
    },
    getAllByTeam: async (req: GetByTeamRequest, res: Response) => {
      const players = await playerUseCases.getAllByTeam(parseInt(req.params.team_id, 10));
      sendSuccess<IPlayer[]>(res, players, GET_ALL_PLAYERS_SUCCESS_RESPONSE_V1);
    }
  }
}

