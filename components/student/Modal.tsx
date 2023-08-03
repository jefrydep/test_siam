import { Formik } from "formik";
import React from "react";

interface PropsModal {
  isOpen: boolean;
  //   setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, children }: PropsModal) => {
  return (
    <>
      {isOpen && (
        <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-90  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
          {children}

          {/* <button onClick={() => setModalOpen(false)}>Cancelar</button> */}
        </div>
      )}
    </>
  );
};

export default Modal;
