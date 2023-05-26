import axios from "axios";
import { RickMortyResponse } from "../models/response.model";

export class RickMortyService<Model, Filter extends object> {
  instance = axios.create({ baseURL: "https://rickandmortyapi.com/api/" });
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getAll(
    page: number = 1,
    filters?: Filter
  ): Promise<RickMortyResponse<Model>> {
    const response = await this.instance.get<RickMortyResponse<Model>>(
      this.buildUrl(page, filters)
    );

    return response.data;
  }

  async getSingle(id: string): Promise<Model> {
    const response = await this.instance.get<Model>(`${this.url}/${id}`);
    return response.data;
  }

  async getMultiple(ids: string[]): Promise<Model[]> {
    const response = await this.instance.get<Model[]>(
      `${this.url}/${ids.toString}`
    );
    return response.data;
  }

  private buildUrl(page: number, filters?: Filter): string {
    const filterParams = Object.entries(filters ?? {}).reduce(
      (prev, current) => {
        return `${prev}&${current[0]}=${current[1]}`;
      },
      ""
    );

    return `${this.url}?page=${page}${filterParams}`;
  }
}
