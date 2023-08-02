import { StudentContext } from "@/context/student/StudentContext";
import { useContext } from "react";
import { isContext } from "vm";

export const useStudent = () => {
  const students = useContext(StudentContext);
  console.log(students);
  console.log("hola");
  if (!students)
    throw new Error(" studnetsuser  must be used within a studenProvider");
  return students;
};
