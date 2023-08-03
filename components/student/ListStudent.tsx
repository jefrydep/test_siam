import { useStudent } from "@/hooks/useStudent";
import React from "react";
import ItemStudent from "./ItemStudent";
import { Persona } from "@/interfaces/perona";

const ListStudent = () => {
  const { students, loading } = useStudent();
  if (loading) {
    return (
      <div className="mx-16 font-bold text-4xl text-violet-600 mb-7">
        ...cargando
      </div>
    );
  }
  return (
    <div>
      {students.map((pers: Persona) => (
        <ItemStudent {...pers} key={pers.ide_per} />
      ))}
    </div>
  );
};

export default ListStudent;
