import { RickMortyService } from "@/app/services/rick-morty.service";
import { EpisodeFilter } from "../models/episode-filter.model";
import { Episode } from "../models/episode.model";

class EpisodeService extends RickMortyService<Episode, EpisodeFilter> {
  constructor() {
    super("episode");
  }
}

export const episodeService = new EpisodeService();
