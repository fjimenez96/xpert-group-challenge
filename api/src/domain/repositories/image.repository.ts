import { ImageEntity } from "../entities/image.entity";

export interface ImageRepository {
  getById: (id: string) => Promise<ImageEntity | null>;
}
