import { BreedEntity } from "../../../domain/entities/breed.entity";
import { BreedRepository } from "../../../domain/repositories/breed.repository";

export class BreedFindSearchUseCase {
  private readonly _breedRepository: BreedRepository;

  constructor(breedRepository: BreedRepository) {
    this._breedRepository = breedRepository;
  }

  async run(name: string,limit: number, page: number): Promise<BreedEntity[]> {
    return await this._breedRepository.getBySearch(name, limit, page);
  }
}
