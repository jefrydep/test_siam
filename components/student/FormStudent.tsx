"use client";
import React, { useEffect, useState } from "react";
import ItemStudent from "./ItemStudent";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useStudent } from "@/hooks/useStudent";
// import { StudentsResponse } from "@/interfaces/studentsResponse";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { Persona } from "@/interfaces/perona";

interface Props {
  isOpen: boolean;
}
const FormStudent = ({}) => {
  const [ShowModal, setShowModal] = useState(false);
  const { students, createStudent } = useStudent();
  //   console.log(students);

  const onSubmit = async (student: Persona) => {
    // resetform();

    setShowModal(false);
    createStudent(student);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El usuario a sido guardado",
      showConfirmButton: false,
      timer: 1700,
    });
    // getStudentRequest();
  };

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="flex mx-16 mb-4   justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-bold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Agregar +
      </button>

      {/* vamos a centrar  un modal con css */}

      {/* {ShowModal && (
        <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-90  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
          <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
            <h3>Crear estudiante</h3>
            <Formik
              initialValues={{
                nom_per: "",
                pat_per: "",
                mat_per: "",
                nro_doc: "",
                fch_nac: "",
              }}
              onSubmit={onSubmit}
            >
              <Form className="flex flex-col gap-2">
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Nombre
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="nom_per"
                  placeholder="Jefry Palomino"
                />
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Apellido Paterno
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="pat_per"
                  placeholder="Palomino"
                />
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Apellido Materno
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="mat_per"
                  placeholder="Mayta"
                />
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Dni
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="nro_doc"
                  placeholder="75061948"
                />
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  fecha de nacimiento
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="fch_nac"
                  placeholder="21/07/1993"
                />

                <div className="flex gap-4 justify-center mt-4">
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Cancelar
                  </button>
                  <button
                    // onClick={() => {
                    //   setShowModal(false);
                    // }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      )} */}
      <Modal isOpen={ShowModal}>
        {/* <input type="text" placeholder="este es mi modal" /> */}
        <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
          <h3>Crear estudiante</h3>
          <Formik
            initialValues={{
              nom_per: "",
              pat_per: "",
              mat_per: "",
              nro_doc: "",
              fch_nac: "",
            }}
            onSubmit={onSubmit}
          >
            <Form className="flex flex-col gap-2">
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Nombre
              </label>
              <Field
                className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="nom_per"
                placeholder="Jefry Palomino"
              />
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Apellido Paterno
              </label>
              <Field
                className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="pat_per"
                placeholder="Palomino"
              />
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Apellido Materno
              </label>
              <Field
                className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="mat_per"
                placeholder="Mayta"
              />
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                Dni
              </label>
              <Field
                className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="nro_doc"
                placeholder="75061948"
              />
              <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                fecha de nacimiento
              </label>
              <Field
                className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                name="fch_nac"
                placeholder="21/07/1993"
              />

              <div className="flex gap-4 justify-center mt-4">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Cancelar
                </button>
                <button
                  // onClick={() => {
                  //   setShowModal(false);
                  // }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </>
  );
};

export default FormStudent;
