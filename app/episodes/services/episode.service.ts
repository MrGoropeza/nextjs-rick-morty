import { RickMortyService } from "@/app/services";
import { Episode, EpisodeFilter } from "../models";

class EpisodeService extends RickMortyService<Episode, EpisodeFilter> {
  constructor() {
    super("episode");
  }
}

export const episodeService = new EpisodeService();
