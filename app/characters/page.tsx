import { Routes } from "@/app/models";
import { Navigator } from "@/components";
import { episodeService } from "../episodes/services";
import { CharacterCard } from "./components";
import { characterService } from "./services";

async function fetchCharacters() {
  const response = await characterService.getAll(1);

  const firstEpisodesIds = response.results.map((character) => {
    return episodeService.getId(character.episode[0]);
  });

  const firstEpisodes = await episodeService.getMultiple(firstEpisodesIds);

  response.results.forEach((character, index) => {
    character.episodes = [];
    character.episodes.push(firstEpisodes[index]);
  });

  return response.results;
}

const Characters = async () => {
  const characters = await fetchCharacters();

  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      <div className="m-4 grid grid-cols-1 gap-2 lg:grid-cols-2 2xl:grid-cols-3">
        {characters.map((character) => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </div>
    </>
  );
};

export default Characters;
