import { useRouter } from "next/router";
import Head from "next/head";
import React, { Fragment } from "react";
import NewPetsForm, { PetTypes } from "@/components/pets/NewPetsForm";

const NewPetPage = () => {
  const router = useRouter();

  const addPetHandler = async (petData: PetTypes) => {
    const response = await fetch("/api/new-pet", {
      method: "POST",
      body: JSON.stringify(petData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add a New Pet</title>
        <meta name="description" content="Add your own meetup" />
      </Head>
      <NewPetsForm onAddPetdata={addPetHandler} />
    </Fragment>
  );
};

export default NewPetPage;
