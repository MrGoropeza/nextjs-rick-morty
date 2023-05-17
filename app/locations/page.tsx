import { Routes } from "@/app/models";
import { Card, Navigator } from "@/components";
import { getLocations } from "./services";

async function fetchLocations() {
  const response = await getLocations();
  return response;
}

const Locations = async () => {
  const Locations = await fetchLocations();

  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {Locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
};

export default Locations;
