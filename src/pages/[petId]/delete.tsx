import Card from "@/components/ui/Card";
import { NextPage } from "next";
import { useRouter } from "next/router";

type PetId = {
  id: string;
};

const PetDeletePage: NextPage = () => {
  const router = useRouter();

  const petId = router.query.petId;

  const deleteHandler = async () => {
    const response = await fetch("/api/new-pet", {
      method: "DELETE",
      body: JSON.stringify(petId),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-sceen gap-y-4 w-full text-black">
      <h2 className="text-3xl">Are you to sure to delete this item?</h2>
      <div className="flex justify-center gap-4">
        <button
          className="bg-blue-800 py-2 px-4 text-white font-bold"
          onClick={() => router.push("/")}
        >
          Cancel
        </button>
        <button
          className="bg-red-800 px-4 py-2 text-white font-bold"
          onClick={deleteHandler}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default PetDeletePage;
