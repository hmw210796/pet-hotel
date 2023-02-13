import { PetTypes } from "./NewPetsForm";
import PetItem from "./PetItem";

const PetsList: React.FC<{ pets: PetTypes[] }> = (props) => {
  return (
    <ul className="list-none m-0 p-0">
      {props.pets.map((pets) => (
        <PetItem key={pets.id} item={pets} />
      ))}
    </ul>
  );
};

export default PetsList;
