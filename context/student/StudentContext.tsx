"use client";
import {
  createStudentRequest,
  deleteStudentRequest,
  getStudentRequest,
  updateStudentRequest,
} from "@/helpers/students";
import { Persona } from "@/interfaces/perona";
// import { Persona } from "@/interfaces/studentsResponse";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface StudentContextValue {
  loading: boolean;
  students: Persona[];
  createStudent: (student: Persona) => Promise<void>;
  deleteStudent: (id: number) => Promise<void>;
  updateStudent: (student: Persona) => Promise<void>;
}
export const StudentContext = createContext<StudentContextValue>({
  loading: true,
  students: [],
  createStudent: async () => {},
  deleteStudent: async () => {},
  updateStudent: async () => {},
});

export const StudentProvider = ({ children }: PropsWithChildren) => {
  const [students, setstudents] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("hola desde context");
  useEffect(() => {
    getStudentRequest()
      .then((resp) => setstudents(resp.data))
      .catch((err) => console.log(err));
    // console.log("hola sdsadsa");
    setLoading(false);
  }, []);

  const createStudent = async (student: Persona) => {
    const res = await createStudentRequest(student);
    const data = await res.json();
    setstudents([...students, data]);
  };

  const deleteStudent = async (id: number) => {
    const res = await deleteStudentRequest(id);
    if (res.status === 200) {
      setstudents(students.filter((student) => student.ide_per !== id));
    }
  };
  const updateStudent = async (student: Persona) => {
    const response = await updateStudentRequest(student);
    const data = await response.json();
    setstudents(
      students.map((st) =>
        st.ide_per === student.ide_per ? { ...st, ...data } : st
      )
    );
  };

  return (
    <StudentContext.Provider
      value={{
        loading,
        students,
        createStudent,
        deleteStudent,
        updateStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
