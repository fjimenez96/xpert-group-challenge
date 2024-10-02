import { Request, Response } from "express";
import { BreedFindAllUseCase } from "../../application/uses.cases/breed/breed.find.all";
import { BreedFindIdUseCase } from "../../application/uses.cases/breed/breed.find.id";
import { BreedFindSearchUseCase } from "../../application/uses.cases/breed/breed.find.search";
import { BreedEntity } from "../../domain/entities/breed.entity";

export class BreedController {
  constructor(
    private readonly breedFindAllUseCase: BreedFindAllUseCase,
    private readonly breedFindIdUseCase: BreedFindIdUseCase,
    private readonly breedFindSearchUseCase: BreedFindSearchUseCase
  ) {}

  getBreeds = async (req: Request, res: Response): Promise<any> => {
    try {
      const { limit = 10, page = 0 } = req.query;
      const breeds: BreedEntity[] = await this.breedFindAllUseCase.run(
        +limit,
        +page
      );
      return res.status(200).json(breeds);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

  getBreedById = async (req: Request, res: Response): Promise<any> => {
    try {
      const { breed_id } = req.params;
      const breed: BreedEntity | null = await this.breedFindIdUseCase.run(
        breed_id
      );
      return res.status(200).json(breed);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

  searchBreeds = async (req: Request, res: Response): Promise<any> => {
    try {
      const { name = "", limit = 10, page = 0 } = req.query;
      const breeds: BreedEntity[] = await this.breedFindSearchUseCase.run(
        name.toLocaleString(),
        +limit,
        +page
      );
      return res.status(200).json(breeds);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
}
