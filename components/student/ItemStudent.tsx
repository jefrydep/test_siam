import React, { useEffect, useState } from "react";
// ("use client");

import { useStudent } from "@/hooks/useStudent";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import moment from "moment-timezone";
import { Persona } from "@/interfaces/perona";

const ItemStudent = (persona: Persona) => {
  const [ShowMOdal, setShowMOdal] = useState(false);
  const { deleteStudent, updateStudent } = useStudent();

  const onSubmit = async (student: Persona) => {
    // resetform();

    setShowMOdal(false);
    // createStudent(student)
    updateStudent(student);
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
    <div className="mx-16 text-center  border-b-2 items-center border-b-orange-50 bg-blue-200 grid grid-cols-6">
      <div>{persona.nom_per} </div>
      <div> {persona.pat_per} </div>
      <div> {persona.mat_per}</div>
      <div>{persona.nro_doc}</div>
      <div>{moment(persona.fch_nac).format("DD/MM/YYYY")} </div>

      <div className="flex  ">
        <div
          onClick={() => setShowMOdal(true)}
          className="bg-green-400 w-8 h-8  cursor-pointer justify-center flex items-center font-bold text-white rounded-lg m-1 "
        >
          U
        </div>
        <Modal isOpen={ShowMOdal}>
          <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
            <h3>Crear estudiante</h3>
            <Formik
              initialValues={{
                ide_per: +`${persona.ide_per}`,
                nom_per: `${persona.nom_per}`,
                pat_per: `${persona.pat_per}`,
                mat_per: `${persona.mat_per}`,
                nro_doc: `${persona.nro_doc}`,
                fch_nac: `${moment(persona.fch_nac).format("YYYY-MM-DD")}`,
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
                  // value="gdodredo"
                />
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Apellido Paterno
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="pat_per"
                  placeholder="Palomino"
                  // value="partero"
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
                      setShowMOdal(false);
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
        <div
          onClick={async () => {
            Swal.fire({
              title: `¿estas seguro de eliminar a ${persona.nom_per}?`,
              text: "¡no podras revertir los cambios!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Sí, ! Eliminar !",
            }).then((result) => {
              if (result.isConfirmed) {
                deleteStudent(persona.ide_per);

                Swal.fire(
                  "Eliminado!",
                  "el usuario ha sido eliminado",
                  "success"
                );
              }
            });
          }}
          className="bg-red-400 w-8 h-8 justify-center flex items-center font-bold text-white rounded-lg m-1 cursor-pointer "
        >
          D
        </div>
      </div>
    </div>
  );
};

export default ItemStudent;
