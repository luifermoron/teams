import { getCall } from "../network/common";

import IRepository from "@/lib/domain/repositories/IRepository";

export default abstract class RemoteRepository<Entity> implements IRepository<Entity> {
    async getAll(url: string): Promise<Entity[]> {
        return getCall<Entity[]>(url);
    }

    abstract test(): void;
}