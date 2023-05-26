export interface RickMortyResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface RickMortyResponse<Model> {
  info: RickMortyResponseInfo;
  results: Model[];
}
