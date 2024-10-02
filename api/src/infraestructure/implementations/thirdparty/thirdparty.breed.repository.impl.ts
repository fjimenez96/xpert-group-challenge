import axios, { AxiosInstance } from "axios";
import { BreedEntity } from "../../../domain/entities/breed.entity";
import { BreedRepository } from "../../../domain/repositories/breed.repository";

export class ThirdpartyBreedRepositoryImpl implements BreedRepository {
  private _baseUrl: string;
  private _token: string;
  private _axiosInstance: AxiosInstance;
  private _breedPath: string = "breeds";

  constructor(baseUrl: string, token: string) {
    this._baseUrl = baseUrl;
    this._token = token;

    this._axiosInstance = axios.create({
      baseURL: this._baseUrl,
      headers: { "x-api-key": this._token },
    });
  }

  private _getEntity(breed: any): BreedEntity {
    const { id, name, description, temperament, origin, reference_image_id } =
      breed;

    const breedEntity: BreedEntity = {
      id,
      name,
      description,
      temperament,
      origin,
      reference_image_id,
    };

    return breedEntity;
  }

  async getAll(limit: number, page: number): Promise<BreedEntity[]> {
    const url: string = `${this._baseUrl}/${this._breedPath}?limit=${limit}&page=${page}`;
    const response = await this._axiosInstance.get(url);
    const data = response.data || [];
    return data.map((breed: any) => this._getEntity(breed));
  }

  async getById(id: string): Promise<BreedEntity | null> {
    const url: string = `${this._baseUrl}/${this._breedPath}/${id}`;
    const response = await this._axiosInstance.get(url);
    const data = response.data || null;
    return this._getEntity(data);
  }

  async getBySearch(name:string, limit: number, page: number): Promise<BreedEntity[]> {
    const url: string = `${this._baseUrl}/${this._breedPath}/search?q=${name}&limit=${limit}&page=${page}`;
    const response = await this._axiosInstance.get(url);
    const data = response.data || [];
    return data.map((breed: any) => this._getEntity(breed));
  }
}
