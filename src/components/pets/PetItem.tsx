import Card from "../ui/Card";
import classes from "./PetItem.module.css";
import { useRouter } from "next/navigation";
import { PetTypes } from "./NewPetsForm";

const PetItem: React.FC<{ item: PetTypes }> = (props) => {
  const { name, image, animalBreed, id } = props.item;
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + id);
  };

  const deleteHandler = () => {
    router.push("/" + id + "/delete");
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.content}>
          <h3>{name}</h3>
          <p>{animalBreed}</p>
        </div>
        <div className="flex justify-center">
          <div className={classes.actions}>
            <button onClick={showDetailsHandler}>Show Details</button>
          </div>
          <div className={classes.actions}>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default PetItem;
