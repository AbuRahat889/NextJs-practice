import Meals from "@/components/Meals";
import React from "react";
const MeilsPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-center text-red-500 font-bold text-2xl">
        this is Meals Page{" "}
      </h1>

      <Meals />
    </div>
  );
};

export default MeilsPage;
