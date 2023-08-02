import { Persona } from "@/components/student/ItemsStudent";
import {
  createStudentRequest,
  deleteStudentRequest,
  getStudentRequest,
} from "@/helpers/students";
import { StudentsResponse } from "@/interfaces/studentsResponse";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface StudentContextValue {
  students: StudentsResponse[];
  createStudent: (student: Persona) => Promise<void>;
  deleteStudent: (id: number) => Promise<void>;
}
export const StudentContext = createContext<StudentContextValue>({
  students: [],
  createStudent: async () => {},
  deleteStudent: async () => {},
});

export const StudentProvider = ({ children }: PropsWithChildren) => {
  const [students, setstudents] = useState<StudentsResponse[]>([]);

  console.log("hola desde context");
  useEffect(() => {
    getStudentRequest()
      .then((resp) => setstudents(resp.data))
      .catch((err) => console.log(err));
    console.log("hola sdsadsa");
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

  return (
    <StudentContext.Provider
      value={{
        students,
        createStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
