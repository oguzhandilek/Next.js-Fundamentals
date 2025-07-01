"use client";
import axios from "axios";

import { useEffect, useRef, useState } from "react";


export default function RegisterForm({searchTerm,setSearchTerm,setUser,user}) {

  


  const api = axios.create({ baseURL: "http://localhost:3000/users/api" });

  const createUser = async (user) => {
    const response = await api.post("/", user);
    return response.data;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newUser = { name: user.name, email: user.email };
    await createUser(newUser);
    // window.location.reload();
    setUser({ name: "", email: "" }); // formu sıfırla
  };
  const handleKeyPress=(e)=>{
    if (e.key==="Enter") {
        handleSave()
    }
  }

  const inputRef=useRef(null)
  useEffect(() => {
    inputRef.current.focus()

    
  }, [])
  

  return (
    <>
      <div className="relative">
        <div>
          <form
            className="flex flex-row bg-orange-100 font-semibold text-stone-600 w-full h-16 sticky left-0 top-0 p-4"
            onSubmit={handleSave}
          >
            <input
            ref={inputRef}
              className="border rounded-lg p-2 mr-2 hover:border-orange-600 hover:shadow-xl shadow-md focus:border-orange-600 focus:text-orange-400"
              type="text"
            
              placeholder="user name"
              onKeyDown={handleKeyPress}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              className="border rounded-lg p-2 mr-4 hover:border-orange-600 hover:shadow-xl shadow-md focus:border-orange-600 focus:text-orange-400"
              type="email"
              placeholder="email"
              value={user.email}
              onKeyDown={handleKeyPress}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <button
              type="submit"
              className="bg-orange-400 w-24 h-auto rounded-xl hover:bg-orange-300 text-orange-200 hover:text-orange-500 shadow-md hover:shadow-xl"
            >
              Save
            </button>
          </form>
        </div>

        <div className="absolute right-10 top-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Arama:", searchTerm);
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-1 rounded"
            />
         
          </form>
        </div>
      </div>
    </>
  );
}
