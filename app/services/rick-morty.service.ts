import axios from "axios";
import { RickMortyResponse } from "../models/response.model";

interface BaseModel {
  id: number;
  url: string;
  created: string;
}

export class RickMortyService<Model extends BaseModel, Filter extends object> {
  instance = axios.create({ baseURL: "https://rickandmortyapi.com/api/" });
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async getAll(
    page: number = 1,
    filters?: Filter
  ): Promise<RickMortyResponse<Model>> {
    const url = this.buildUrl(page, filters);
    const response = await this.instance.get<RickMortyResponse<Model>>(url);
    return response.data;
  }

  async getSingle(id: string): Promise<Model> {
    const url = `${this.baseUrl}/${id}`;
    const response = await this.instance.get<Model>(url);
    return response.data;
  }

  async getMultiple(ids: number[]): Promise<Model[]> {
    const parsedIds = Array.from(new Set(ids));
    const url = `${this.baseUrl}/${parsedIds.toString()}`;
    const response = await this.instance.get<Model[]>(url);

    return ids.map(
      (id) => response.data.find((model) => model.id === id) ?? ({} as Model)
    );
  }

  private buildUrl(page: number, filters?: Filter): string {
    const filterParams = Object.entries(filters ?? {}).reduce(
      (prev, current) => {
        return `${prev}&${current[0]}=${current[1]}`;
      },
      ""
    );

    return `${this.baseUrl}?page=${page}${filterParams}`;
  }
}
