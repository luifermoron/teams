import { makeInvoker } from 'awilix-express';
import GetPlayersV1 from './get-players.v1';

const getAllV1 = makeInvoker(GetPlayersV1);
exports.V1 = getAllV1;