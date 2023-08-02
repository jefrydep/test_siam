import ItemStudent from "@/components/student/ItemStudent";
import ItemsStudent from "@/components/student/ItemsStudent";
import { NavBar } from "@/components/navbar/NavBar";
import { Search } from "@/components/student/search/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      {/* <Home /> */}
      <NavBar />
      <Search />
      <ItemsStudent />
    </main>
  );
}
