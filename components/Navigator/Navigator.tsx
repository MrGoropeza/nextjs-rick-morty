import { Route } from "@/app/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

const Navigator = ({ pathNames }: Props) => {
  return (
    <div className="flex gap-4">
      {pathNames.map((pathName) => (
        <Link href={pathName.path} key={pathName.name}>
          {pathName.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigator;
