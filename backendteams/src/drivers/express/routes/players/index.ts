import express from 'express';

const getPlayers = require('./get-players');

export default function playersRouter() {
    const teamsRoutes = express.Router({ mergeParams: true });
    teamsRoutes.get('/', getPlayers.V1('getAll'));
    teamsRoutes.get('/:team_id', getPlayers.V1('getAllByTeam'));
    return teamsRoutes;
}