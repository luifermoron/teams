export default interface IRepository<Model> {
    getAll(): Promise<Model[]>;
}