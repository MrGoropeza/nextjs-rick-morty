import { RickMortyService } from "@/app/services/rick-morty.service";
import { Character } from "../models";
import { CharacterFilter } from "../models/character-filter.model";

class CharacterService extends RickMortyService<Character, CharacterFilter> {
  constructor() {
    super("character");
  }
}

export const characterService = new CharacterService();
