import { RickMortyService } from "@/app/services";
import { Character, CharacterFilter } from "../models";

class CharacterService extends RickMortyService<Character, CharacterFilter> {
  constructor() {
    super("character");
  }
}

export const characterService = new CharacterService();
