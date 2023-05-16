import { Route } from "@/app/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

const Navigator = ({ pathNames }: Props) => {
  return (
    <div className="flex w-full gap-4 overflow-auto bg-gray-900/50 min-[400px]:justify-center">
      {pathNames.map((pathName) => (
        <Link
          className="rounded-md p-4 text-xl underline underline-offset-4 hover:bg-green-700 hover:no-underline md:text-2xl"
          href={pathName.path}
          key={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigator;
