import React, { useEffect, useState } from "react";
// ("use client");
import { Persona } from "./ItemsStudent";

const ItemStudent = (persona: Persona) => {
  return (
    <div className="mx-16 text-center  border-b-2 items-center border-b-orange-50 bg-blue-200 grid grid-cols-6">
      <div>{persona.nom_per} </div>
      <div> {persona.pat_per} </div>
      <div> {persona.mat_per}</div>
      <div>{persona.nro_doc}</div>
      <div>{persona.fch_nac} </div>
      <div className="flex  ">
        <div className="bg-green-400 w-8 h-8 justify-center flex items-center font-bold text-white rounded-lg m-1 ">
          U
        </div>
        <div className="bg-red-400 w-8 h-8 justify-center flex items-center font-bold text-white rounded-lg m-1 ">
          D
        </div>
      </div>
    </div>
  );
};

export default ItemStudent;
