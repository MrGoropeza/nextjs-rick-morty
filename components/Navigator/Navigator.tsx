import { Route } from "@/app/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

const Navigator = ({ pathNames }: Props) => {
  return (
    <nav className="w-full bg-gray-900/50 p-2">
      <ul className="flex gap-4 overflow-x-auto min-[400px]:justify-center">
        {pathNames.map((pathName) => (
          <li
            key={pathName.path}
            className="rounded-md p-4 text-xl underline underline-offset-4 hover:bg-green-700 hover:no-underline md:text-2xl"
          >
            <Link href={pathName.path}>{pathName.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigator;
