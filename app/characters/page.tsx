"use client";

import { Routes } from "@/app/models";
import { Navigator } from "@/components";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { useEffect, useState } from "react";
import { episodeService } from "../episodes/services";
import { CharacterCard, CharacterFilterComponent } from "./components";
import { Character, CharacterFilter } from "./models";
import { characterService } from "./services";

async function fetchCharacters(page: number, filter?: CharacterFilter) {
  const response = await characterService.getAll(page, filter);

  const firstEpisodesIds = response.results.map((character) => {
    return episodeService.getId(character.episode[0]);
  });

  const firstEpisodes = await episodeService.getMultiple(firstEpisodesIds);

  response.results.forEach((character, index) => {
    character.episodes = [];
    character.episodes.push(firstEpisodes[index]);
  });

  return response;
}

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [filter, setFilter] = useState<CharacterFilter>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchCharacters(page + 1, filter)
      .then((data) => {
        setLoading(false);
        setCharacters(data.results);
        setTotalRecords(data.info.count);
      })
      .catch(() => {
        // setCharacters([]);
        // setTotalRecords(0);
      });
  }, [page, filter]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setPage(event.first / 20);
  };

  return (
    <main className="flex max-h-full flex-col">
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />

      <CharacterFilterComponent loading={loading} setFilter={setFilter} />

      <div className="m-4 grid grid-cols-1 gap-2 overflow-y-auto lg:grid-cols-2 2xl:grid-cols-3">
        {characters.map((character) => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </div>

      <Paginator
        className="bg-slate-800/70"
        pageLinkSize={3}
        first={page * 20}
        rows={20}
        totalRecords={totalRecords}
        onPageChange={onPageChange}
      />
    </main>
  );
};

export default Characters;
