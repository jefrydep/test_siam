"use client";
import { Search } from "@/components/student/search/Search";
import { StudentProvider } from "@/context/student/StudentContext";
import FormStudent from "@/components/student/FormStudent";
import { useEffect, useState } from "react";
import Titles from "@/components/student/Titles";
import ListStudent from "@/components/student/ListStudent";
export default function Home() {
  const [ShowModal, setShowModal] = useState(false);

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // Simula una carga asincrónica
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 400);
  // }, []);
  return (
    <main className=" ">
      {/* <Home /> */}
      <StudentProvider>
        {/* <Search /> */}
        {/* <ItemsStudent /> */}
        {/* <Button onClick={() => setShowModal(true)} /> */}
        {/* {loading ? <div>...cargando</div> : <ListStudent />} */}
        <FormStudent />
        <Titles />
        <ListStudent />
      </StudentProvider>
    </main>
  );
}
