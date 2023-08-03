"use client";
import { Search } from "@/components/student/search/Search";
import { StudentProvider } from "@/context/student/StudentContext";
import FormStudent from "@/components/student/FormStudent";
import { useState } from "react";
import Titles from "@/components/student/Titles";
import ListStudent from "@/components/student/ListStudent";
export default function Home() {
  const [ShowModal, setShowModal] = useState(false);
  return (
    <main className=" ">
      {/* <Home /> */}
      <StudentProvider>
        {/* <Search /> */}
        {/* <ItemsStudent /> */}
        {/* <Button onClick={() => setShowModal(true)} /> */}
        <Titles />

        <ListStudent />
        <FormStudent />
      </StudentProvider>
    </main>
  );
}
