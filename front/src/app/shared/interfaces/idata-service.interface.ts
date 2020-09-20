export interface IDataService {
  getAll(): void;
  show(id: number): void;
  add(data): void;
  update(id: number, data: any): void;
  delete(id: number): void;
}
