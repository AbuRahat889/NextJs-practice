"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [datas, setData] = useState([]);
  const [error, setError] = useState("");

  //fetch Data
  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=a${search}`
      );
      const data = await res.json();
      setData(data.meals);
      //console.log(data.meals);
      setError();
    } catch (error) {
      setError("No Data Found!!");
    }
  };

  useEffect(() => {
    loadData();
  }, [search]);

  const handelar = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handelar}
        type="text"
        className="border border-green-400 p-4"
        placeholder="Search"
      />
      <input
        onClick={() => loadData()}
        type="submit"
        value="search"
        className="bg-green-400 p-4 text-white font-bold"
      />
      {/* <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />*/}

      <div className="mt-10">
        {datas.length > 0 &&
          !error &&
          datas?.map((info) => (
            <div
              key={info.idMeal}
              className="border-2 border-green-500 mb-5 flex gap-10 p-5 rounded-xl"
            >
              <Image
                className="rounded-l-xl"
                src={info.strMealThumb}
                alt={info.strMeal}
                height={300}
                width={300}
              ></Image>
              <div>
                <h1>this is {info?.idMeal} </h1>
                <h1 className="text-xl font-bold">{info?.strMeal}</h1>
                <h1>{info.strInstructions}</h1>
              </div>
            </div>
          ))}
        {error && <h2>No Data Found</h2>}
      </div>
    </div>
  );
};

export default Meals;
