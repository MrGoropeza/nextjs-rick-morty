import { Routes } from "@/app/models";
import { Card, Navigator } from "@/components";
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
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
};

export default Characters;
