import { useStudent } from "@/hooks/useStudent";
import React from "react";
import ItemStudent from "./ItemStudent";
import { Persona } from "@/interfaces/perona";

const ListStudent = () => {
  const { students } = useStudent();

  return (
    <div>
      {students.map((pers: Persona) => (
        <ItemStudent {...pers} key={pers.ide_per} />
      ))}
    </div>
  );
};

export default ListStudent;
