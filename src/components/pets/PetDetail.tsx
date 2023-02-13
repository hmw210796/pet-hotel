import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { PetTypes } from "./NewPetsForm";

const PetDetail: React.FC<{ item: PetTypes }> = (props) => {
  const { name, image, animalClass, animalBreed, service } = props.item;
  return (
    <Fragment>
      <section className="text-center space-y-2  text-black shadow-xl py-4">
        <img src={image} alt={name} className="w-full h-[25rem] object-cover" />
        <div className="space-y-2 p-2">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-3xl">{animalClass}</p>
          <p className="text-3xl">{animalBreed} Breed</p>
          <p className="text-3xl">{service}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default PetDetail;
