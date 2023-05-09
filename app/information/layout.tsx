import { PropsWithChildren } from "react";

const CharactersLayout = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-wrap justify-center gap-4">{children}</div>;
};

export default CharactersLayout;
