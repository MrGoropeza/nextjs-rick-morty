export interface CharacterFilter {
  name?: string;
  status?: "alive" | "dead" | "unknown";
  species?: string[];
  type?: string;
  gender?: "female" | "male" | "genderless" | "unknown";
}
