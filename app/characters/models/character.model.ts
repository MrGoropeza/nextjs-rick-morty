import { Episode } from "@/app/episodes/models/episode.model";

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
  episodes?: Episode[];
}

export interface Origin {
  name: string;
  url: string;
}
