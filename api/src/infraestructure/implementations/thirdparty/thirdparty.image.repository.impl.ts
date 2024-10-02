import axios, { AxiosInstance } from "axios";
import { ImageEntity } from "../../../domain/entities/image.entity";
import { ImageRepository } from "../../../domain/repositories/image.repository";

export class ThirdpartyImageRepositoryImpl implements ImageRepository {
  private _baseUrl: string;
  private _token: string;
  private _axiosInstance: AxiosInstance;
  private _imagePath: string = "images";

  constructor(baseUrl: string, token: string) {
    this._baseUrl = baseUrl;
    this._token = token;

    this._axiosInstance = axios.create({
      baseURL: this._baseUrl,
      headers: { "x-api-key": this._token },
    });
  }

  private _getEntity(image: any): ImageEntity {
    const { id, url, width, height } = image;

    const imageEntity: ImageEntity = {
      id,
      url,
      width: +width,
      height: +height,
    };

    return imageEntity;
  }

  async getById(id: string): Promise<ImageEntity | null> {
    const url: string = `${this._baseUrl}/${this._imagePath}/${id}`;
    const response = await this._axiosInstance.get(url);
    const data = response.data || null;
    return this._getEntity(data);
  }
}
