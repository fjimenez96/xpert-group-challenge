import { ApiKey } from "../domain/entities/api.key.entity";

export class Utils {
  static getApiKeyEntity(): ApiKey {
    const apiKey: ApiKey = {
      baseUrl: process.env.API_CAT_URL || "https://api.thecatapi.com/v1",
      token: process.env.API_CAT_TOKEN || "API_CAT_TOKEN",
    };

    return apiKey;
  }
}
