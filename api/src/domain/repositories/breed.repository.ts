import { BreedEntity } from "../entities/breed.entity";

export interface BreedRepository {
  getAll: (limit: number, page: number) => Promise<BreedEntity[]>;
  getById: (id: string) => Promise<BreedEntity | null>;
  getBySearch: (name: string, limit: number, page: number) => Promise<BreedEntity[]>;
}
