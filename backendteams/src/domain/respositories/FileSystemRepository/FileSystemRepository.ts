import ITeam from "../../entities/ITeam";
import { PLAYER_CLASSNAME, TEAM_CLASSNAME } from "../Constants";
import IRepository from "../IRepository";
const fs = require('fs').promises;
const path = require('path');

export default abstract class FileSystemRepository<ModelGeneric> implements IRepository<ModelGeneric>
{
    #className: string;

    constructor(_className: string) {
      this.#className = _className;
    }


    async _loadData(): Promise<Record<string,unknown>> {
      try {
        const filePath = path.join(__dirname, './fakeDataBase.json');
            
        const data = await fs.readFile(filePath, 'utf8'); // Non-Blocking operation :D
        return JSON.parse(data);
      } catch (err) {
        throw err;
      }
    }

    async getAll(): Promise<ModelGeneric[]> {
      try { 
        const dataJson = await this._loadData();

        if (this.#className === TEAM_CLASSNAME) {
          return dataJson.countries as ModelGeneric[]
        }
        if (this.#className === PLAYER_CLASSNAME) {
          return dataJson.players as ModelGeneric[]
        }
  
        return [] as ModelGeneric[];
      } catch (err) {
        throw err;
      }
    }
}