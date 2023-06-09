import Image from "next/image";

interface CardData {
  name: string;
  type?: string;
  created?: string;
  image?: string;
}

interface Props {
  data: CardData;
}

const Card = ({ data }: Props) => {
  let formatedType = data.type;
  formatedType ||= "No type";

  return (
    <div className="w-fit rounded-md bg-orange-300 p-4 shadow-sm">
      <p>Name: {data.name}</p>
      <p>Type: {formatedType}</p>
      <p>Created: {data.created}</p>
      {!!data.image && (
        <Image
          width={100}
          height={100}
          alt={`${data.name} picture`}
          src={data.image}
          priority
        />
      )}
    </div>
  );
};

export default Card;
