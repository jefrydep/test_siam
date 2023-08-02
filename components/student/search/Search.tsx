import React from "react";

export const Search = () => {
  return (
    <>
      <div className="mb-6">
        <input className="mx-4" type="text" placeholder="Buscar Alumno" />
        <button className="bg-blue-500  px-2 rounded-2xl  text-white">
          Buscar
        </button>
      </div>
    </>
  );
};
