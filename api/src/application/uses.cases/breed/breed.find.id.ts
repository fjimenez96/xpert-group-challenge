import { BreedEntity } from "../../../domain/entities/breed.entity";
import { BreedRepository } from "../../../domain/repositories/breed.repository";

export class BreedFindIdUseCase {
  private readonly _breedRepository: BreedRepository;

  constructor(breedRepository: BreedRepository) {
    this._breedRepository = breedRepository;
  }

  async run(id: string): Promise<BreedEntity | null> {
    return await this._breedRepository.getById(id);
  }
}
