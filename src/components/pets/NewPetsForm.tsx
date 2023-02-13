import { useEffect, useRef, useState } from "react";

import Card from "../ui/Card";
import classes from "./NewPetsForm.module.css";

const catBreed = [
  "British Shorthair",
  "Ragdoll",
  "Persian",
  "Siamese",
  "Abyssinian",
  "Bengal",
  "Maine Coon",
  "Sphinx",
  "Others...",
];

const dogBreed = [
  "German Shepherd",
  "Bulldog",
  "Labrador Retriever",
  "Golden Retriever",
  "Husky",
  "Poodle",
  "Border Collie",
  "Chihuahua",
  "Terrier",
  "Others...",
];

export type PetTypes = {
  name: string;
  image: string;
  animalClass: string;
  animalBreed: string;
  service: string;
  id?: string;
};

const NewPetsForm: React.FC<{
  onAddPetdata: (text: PetTypes) => void;
}> = (props) => {
  const [animalClass, setAnimalClass] = useState("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const classInputRef = useRef<HTMLSelectElement>(null);
  const breedInputRef = useRef<HTMLSelectElement>(null);
  const serviceInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredname = nameInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;
    const enteredClass = classInputRef.current!.value;
    const enteredBreed = breedInputRef.current!.value;
    const enteredService = serviceInputRef.current!.value;

    const petData: PetTypes = {
      name: enteredname,
      image: enteredImage,
      animalClass: enteredClass,
      animalBreed: enteredBreed,
      service: enteredService,
    };

    props.onAddPetdata(petData);
  }

  let breedOptions: string[] = [];

  if (animalClass === "Cat") {
    breedOptions = catBreed;
  } else if (animalClass === "Dog") {
    breedOptions = dogBreed;
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Pet Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>{" "}
        <div className={classes.control}>
          <label htmlFor="type">Pet Service</label>
          <select name="class" id="class" ref={serviceInputRef}>
            <option>Choose...</option>
            <option value="Pet-Boarding">Pet Boarding</option>
            <option value="Pet-Walking">Pet Walking</option>
            <option value="Pet-Sitting">Pet Sitting</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Animal Class</label>
          <select
            name="class"
            id="class"
            onChange={(e) => setAnimalClass(e.target.value)}
            ref={classInputRef}
          >
            <option>Choose...</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="breed">Animal Breed</label>
          <select name="breed" id="breed" ref={breedInputRef}>
            {breedOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.actions}>
          <button>Add Pet</button>
        </div>
      </form>
    </Card>
  );
};

export default NewPetsForm;
