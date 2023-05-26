import axios from "axios";
import { RickMortyResponse } from "../models/response.model";

const API_URL = "https://rickandmortyapi.com/api/";

interface BaseModel {
  id: number;
  url: string;
  created: string;
}

export class RickMortyService<Model extends BaseModel, Filter extends object> {
  instance = axios.create({ baseURL: API_URL });
  baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  modelMapper(model: Model): Model {
    return model;
  }

  async getAll(
    page: number = 1,
    filters?: Filter
  ): Promise<RickMortyResponse<Model>> {
    const url = this.buildUrl(page, filters);
    const response = await this.instance.get<RickMortyResponse<Model>>(url);
    response.data.results = response.data.results.map(this.modelMapper);
    return response.data;
  }

  async getSingle(id: string): Promise<Model> {
    const url = `${this.baseUrl}/${id}`;
    const response = await this.instance.get<Model>(url);
    return this.modelMapper(response.data);
  }

  async getMultiple(ids: number[]): Promise<Model[]> {
    const parsedIds = Array.from(new Set(ids));
    const url = `${this.baseUrl}/${parsedIds.toString()}`;
    const response = await this.instance.get<Model[]>(url);
    response.data = response.data.map(this.modelMapper);

    return ids.map(
      (id) => response.data.find((model) => model.id === id) ?? ({} as Model)
    );
  }

  getId(url: string) {
    if (!url.includes(API_URL)) return 0;

    const result = url
      .replace(API_URL, "")
      .replace(this.baseUrl, "")
      .replace("/", "");

    return Number.parseInt(result);
  }

  private buildUrl(page: number, filters?: Filter): string {
    const filterParams = Object.entries(filters ?? {}).reduce(
      (prev, current) => {
        if (!current[1]) return prev;
        return `${prev}&${current[0]}=${current[1]}`;
      },
      ""
    );

    return `${this.baseUrl}?page=${page}${filterParams}`;
  }
}
