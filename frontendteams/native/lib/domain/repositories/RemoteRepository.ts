import { getCall } from "../../drivers/network/common";

import IRepository from "./IRepository";

export default abstract class RemoteRepository<Entity> implements IRepository<Entity> {
    async getAll(url: string): Promise<Entity[]> {
        return getCall<Entity[]>(url);
    }

    abstract test(): void;
}