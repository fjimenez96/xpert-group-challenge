import { Request, Response } from "express";
import { ImageFindIdUseCase } from "../../application/uses.cases/image/image.find.id";
import { ImageEntity } from "../../domain/entities/image.entity";

export class ImageController {
  constructor(
    private readonly imageFindIdUseCase: ImageFindIdUseCase,
  ) {}

  getImageById = async (req: Request, res: Response): Promise<any> => {
    try {
      const { imagesbybreedid } = req.params;
      const image: ImageEntity | null = await this.imageFindIdUseCase.run(
        imagesbybreedid
      );
      return res.status(200).json(image);
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
}
