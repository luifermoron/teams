import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import ITeam from "../../../domain/entities/ITeam";
import { GET_TEAMS } from "../common/endpoints";

const mock = new MockAdapter(axios);

export const setupFakeHTTP =
    () => {
        mock.onGet(GET_TEAMS).reply<ITeam[]>(200, [
            { id: "1", name: "Spain", group: "H", coach: "Vicente del Bosque" },
            { id: "2", name: "Netherlands", group: "E", coach: "Bert van Marwijk" },
            { id: "3", name: "Germany", group: "D", coach: "Joachim Löw" },
            { id: "4", name: "Uruguay", group: "A", coach: "Óscar Tabárez" },
            { id: "5", name: "Argentina", group: "B", coach: "Diego Maradona" },
            { id: "6", name: "Brazil", group: "G", coach: "Dunga" },
            { id: "7", name: "Ghana", group: "D", coach: "Milovan Rajevac" },
            { id: "8", name: "Paraguay", group: "F", coach: "Gerardo Martino" },
            { id: "9", name: "Netherlands", group: "E", coach: "Bert van Marwijk" },
            { id: "10", name: "England", group: "C", coach: "Fabio Capello" },
            { id: "11", name: "Chile", group: "H", coach: "Marcelo Bielsa" },
            { id: "12", name: "France", group: "A", coach: "Raymond Domenech" }
        ]);
};
