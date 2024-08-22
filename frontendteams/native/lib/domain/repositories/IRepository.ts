export default interface IRepository<Entity> {
    getAll(url: string): Promise<Entity[]>;
}