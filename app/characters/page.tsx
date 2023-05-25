import { Routes } from "@/app/models";
import { Navigator } from "@/components";
import { CharacterCard } from "./components";
import { getCharacters } from "./services";

async function fetchCharacters() {
  const response = await getCharacters();
  return response;
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
