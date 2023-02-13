import { useRouter } from "next/router";
import React, { useRef } from "react";

const PetsSearch = () => {
  const petService = useRef<HTMLSelectElement>(null);
  const router = useRouter();
  const filterHandler = () => {
    router.push({
      pathname: "/",
      search: `?filter=${petService.current!.value}`,
    });
  };

  return (
    <form className="m-4 p-4 text-center  mx-uto border-gray-600 border-b-2">
      <div className="flex  justify-between gap-4">
        <label className="font-semibold text-2xl">Pet Care Service</label>
        <div className="flex gap-4">
          <select
            className="max-w-md mx-auto border-2 p-2 px-4 rounded-md"
            onChange={filterHandler}
            ref={petService}
          >
            <option value="">All</option>
            <option value="Pet-Boarding">Pet Boarding</option>
            <option value="Pet-Sitting">Pet Sitting</option>
            <option value="Pet-Walking">Pet Walking</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default PetsSearch;
