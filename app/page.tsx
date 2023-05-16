import { Navigator } from "@/components";
import { Routes } from "./models";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-full gap-4">
      <h1 className="text-6xl">Welcome to Rick & Morty app</h1>
      <h2 className="text-4xl">What do you want to see?</h2>
      <Navigator
        pathNames={[Routes.CHARACTERS, Routes.LOCATIONS, Routes.EPISODES]}
      />
    </div>
  );
}
