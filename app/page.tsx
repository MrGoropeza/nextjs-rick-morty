import { Navigator } from "@/components";
import { Routes } from "./models";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rick & Morty app</h1>
      <h2>What do you want to see?</h2>

      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
    </div>
  );
}
