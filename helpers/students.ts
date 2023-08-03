import { Persona } from "@/interfaces/perona";
// import { StudentsResponse } from "@/interfaces/studentsResponse";
import axios from "axios";

const API = "http://localhost:3000";

interface PersonaResponse {
  ide_per: string;
  nom_per: string;
  pat_per: string;
  mat_per: string;
  nro_doc: string;
  fch_nac: string;
}
export const getStudentRequest = () => {
  const students = axios.get(`${API}/personas/`);
  return students;
  // console.log(student);
};
// console.log("0dkjsfl");
// export const getUserRequest = () => {
//   const users = axios.get(`${API}/api/auth`);
//   return users;
// };
// export const deleteUserRequest = (id: string) =>
//   fetch(`${API}/api/auth/${id}`, {
//     method: "DELETE",
//   });
export const deleteStudentRequest = (id: number) =>
  fetch(`${API}/personas/${id}`, {
    method: "DELETE",
  });

export const createStudentRequest = async (student: Persona) => {
  return fetch(`${API}/personas/`, {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateStudentRequest = async (student: Persona) =>
  fetch(`${API}/personas/`, {
    method: "PATCH",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  });
