import Image from "next/image";
import { Character } from "../../models";

interface Props {
  data: Character;
}

const CharacterCard = ({ data }: Props) => {
  const statusClasses = {
    Alive: "bg-green-600",
    Dead: "bg-red-800",
    unknown: "bg-gray-600",
  };

  const firstSeen =
    data.episodes &&
    data.episodes[0] &&
    `${data.episodes[0].episode} - ${data.episodes[0].name}`;

  return (
    <div className="flex gap-2">
      {!!data.image && (
        <Image
          className="max-w-none rounded-xl"
          width={210}
          height={210}
          alt={`${data.name} picture`}
          src={data.image}
          priority
        />
      )}
      <div className="flex grow flex-col gap-2 p-2">
        <p className="w-min min-w-full max-w-full break-words text-2xl font-bold">
          {data.name}
        </p>
        <p className="flex items-center gap-2 break-words text-lg">
          <span
            className={`${statusClasses[data.status]} h-3 w-3 rounded-full`}
          ></span>
          {data.status} - {data.species}
        </p>
        <p className="flex flex-col">
          <span className="text-slate-300">Last known location:</span>
          {data.location.name}
        </p>
        <p className="flex flex-col">
          <span className="text-slate-300">First seen in:</span>
          {firstSeen}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
