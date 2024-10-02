import { ImageEntity } from "../../../domain/entities/image.entity";
import { ImageRepository } from "../../../domain/repositories/image.repository";

export class ImageFindIdUseCase {
  private readonly _imageRepository: ImageRepository;

  constructor(imageRepository: ImageRepository) {
    this._imageRepository = imageRepository;
  }

  async run(id: string): Promise<ImageEntity | null> {
    return await this._imageRepository.getById(id);
  }
}
