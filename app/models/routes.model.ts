export const Routes = {
  HOME: { path: "/", name: "Home" },
  CHARACTERS: { path: "information/characters", name: "Characters" },
  LOCATIONS: { path: "information/locations", name: "Locations" },
  EPISODES: { path: "information/episodes", name: "Episodes" },
};

export interface Route {
  path: string;
  name: string;
}
