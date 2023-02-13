import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import React, { Fragment } from "react";
import PetDetail from "../../components/pets/PetDetail";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PetTypes } from "@/components/pets/NewPetsForm";
import { ParsedUrlQuery } from "querystring";

export interface PetDetailPageProps {
  petData: PetTypes;
}

const PetsDetailsPage: NextPage<PetDetailPageProps> = (props) => {
  const { petData } = props;

  if (!petData) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{petData.name}</title>
      </Head>
      <PetDetail
        item={petData}
        // image={props.petData.image}
        // name={props.petData.name}
        // animalClass={props.petData.animalClass}
        // animalBreed={props.petData.animalBreed}
        // service={props.petData.service}
      />
    </Fragment>
  );
};

export default PetsDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
  const db = client.db();

  const petsCollection = db.collection("Pet Boarding");

  const pets = await petsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    fallback: true,
    paths: pets.map((pet) => ({
      params: { petId: pet._id.toString() },
    })),
    // [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
};

interface Params extends ParsedUrlQuery {
  petId: string;
}

export const getStaticProps: GetStaticProps<
  PetDetailPageProps,
  Params
> = async (context) => {
  const petId = context.params!.petId;

  const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
  const db = client.db();

  const petsCollection = db.collection("Pet Boarding");

  const selectedPets = await petsCollection.findOne({
    _id: new ObjectId(petId),
  });

  client.close();

  return {
    props: {
      petData: {
        name: selectedPets?.name,
        animalClass: selectedPets?.animalClass,
        image: selectedPets?.image,
        animalBreed: selectedPets?.animalBreed,
        id: selectedPets?._id.toString(),
        service: selectedPets?.service,
      },
    },
    revalidate: 1,
  };
};
