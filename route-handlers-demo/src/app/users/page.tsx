"use client"
import Navbar from "@/components/Navbar";
import RegisterForm from "@/components/RegisterForm";
import UserList from "@/components/UserList";

import { Suspense, useState } from "react";
export default function Users() {
    const [searchTerm,setSearchTerm]=useState("")
    const [user, setUser   ] = useState({ name: "", email: "" })
  return (
    <>
      <div className="">
        {" "}
        <div className="sticky left-0 top-0 z-50">
          <Navbar />
          <RegisterForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user} setUser={setUser} />
        </div>
        <div className=" ">
          {" "}
          <Suspense
            fallback={<p className="text-center mt-4">Yükleniyor...</p>}
          >
            <UserList searchTerm={searchTerm} user={user}/>
          </Suspense>
        </div>
      </div>
    </>
  );
}
