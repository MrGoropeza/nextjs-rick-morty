import { Navigator } from "@/components";
import { Routes } from "./models";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-center text-4xl md:text-6xl">
        Welcome to Rick & Morty App
      </h1>
      <h2 className="text-center text-2xl md:text-4xl">
        What do you want to see?
      </h2>
      <Navigator
        pathNames={[Routes.CHARACTERS, Routes.LOCATIONS, Routes.EPISODES]}
      />
    </div>
  );
}
