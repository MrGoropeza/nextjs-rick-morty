import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { SelectItem } from "primereact/selectitem";
import { useEffect, useState } from "react";
import { CharacterFilter } from "../../models";

interface Props {
  loading: boolean;
  setFilter: (filter: CharacterFilter) => void;
}

const CharacterFilterComponent = ({ loading, setFilter }: Props) => {
  const [status, setStatus] = useState<
    "alive" | "dead" | "unknown" | undefined
  >(undefined);
  const statuses: SelectItem[] = [
    { label: "Alive", value: "alive" },
    { label: "Dead", value: "dead" },
    { label: "Unknown", value: "unknown" },
  ];

  const [gender, setGender] = useState<
    "unknown" | "female" | "male" | "genderless" | undefined
  >(undefined);
  const genders: SelectItem[] = [
    { label: "Female", value: "female" },
    { label: "Male", value: "male" },
    { label: "Genderless", value: "genderless" },
    { label: "Unknown", value: "unknown" },
  ];

  const [name, setName] = useState<string | undefined>(undefined);
  const [specie, setSpecie] = useState<string | undefined>(undefined);
  const [type, setType] = useState<string | undefined>(undefined);

  useEffect(() => {
    setFilter({
      name,
      status,
      species: specie ? [specie] : undefined,
      type,
      gender,
    });
  }, [name, status, specie, type, gender]);

  return (
    <div className="flex justify-center gap-2 bg-slate-800/70 p-2">
      <span className="p-float-label p-input-icon-left mt-3">
        <i className="pi pi-search" />
        <InputText
          id="name"
          placeholder="Name"
          value={name}
          disabled={loading}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Name</label>
      </span>

      <span className="p-float-label mt-3">
        <Dropdown
          id="status"
          placeholder="Status"
          value={status}
          options={statuses}
          disabled={loading}
          onChange={(e) => setStatus(e.value)}
          showClear
        />
        <label htmlFor="status">Status</label>
      </span>

      <span className="p-float-label p-input-icon-left mt-3">
        <i className="pi pi-search" />
        <InputText
          id="specie"
          placeholder="Specie"
          value={specie}
          disabled={loading}
          onChange={(e) => setSpecie(e.target.value)}
        />
        <label htmlFor="specie">Specie</label>
      </span>

      <span className="p-float-label p-input-icon-left mt-3">
        <i className="pi pi-search" />
        <InputText
          id="type"
          placeholder="Type"
          value={type}
          disabled={loading}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="type">Type</label>
      </span>

      <span className="p-float-label mt-3">
        <Dropdown
          id="gender"
          placeholder="Gender"
          value={gender}
          options={genders}
          disabled={loading}
          onChange={(e) => setGender(e.value)}
          showClear
        />
        <label htmlFor="gender">Gender</label>
      </span>
    </div>
  );
};

export default CharacterFilterComponent;
