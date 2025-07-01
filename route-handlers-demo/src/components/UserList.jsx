"use client";
import { RxUpdate } from "react-icons/rx";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function UserList({ searchTerm,user }) {
  const api = axios.create({ baseURL: "http://localhost:3000/users/api" });
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await api.get(`?query=${searchTerm}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [searchTerm,user]);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <>
      <div className=" bg-amber-100   ">
        <div className="table w-full ">
          <div className="table-header-group bg-orange-300 sticky top-0 z-10 ">
            <div className="table-row ">
              <div className="table-cell text-left px-4 py-2 font-semibold text-orange-600   ">
                ID
              </div>
              <div className="table-cell text-left px-4 py-2 font-semibold text-orange-600  ">
                User Name
              </div>
              <div className="table-cell text-left px-4 py-2 font-semibold text-orange-600">
                Email
              </div>
              <div className="table-cell text-left px-4 py-2 font-semibold text-orange-600">
                Update/Delete
              </div>
            </div>
          </div>
       <div className="table-row-group">
            {user.map((u) => (
              <div className="table-row" key={u.id}>
                <div className="table-cell text-left px-4 py-1 border-b-1 border-orange-800 font-semibold text-orange-400 ">
                  <p className="hover:shadow-2xl hover:text-sm">{u.id}.</p>
                </div>
                <div className="table-cell text-left px-4 py-1 border-b-1 border-orange-800 font-semibold text-orange-400 ">
                  <p className="hover:shadow-2xl hover:text-sm">{u.name}</p>
                </div>
                <div className="table-cell text-left px-4 py-1 border-b-1 border-orange-800 font-semibold text-orange-400 ">
                  <p className="hover:shadow-2xl hover:text-sm">{u.email}</p>
                </div>
                <div className="table-cell text-left px-4 py-1 border-b-1 border-orange-800 font-semibold text-orange-400  text-xl">
                  <div className="flex justify-between w-24">
                    <p className="text-green-700 cursor-pointer hover:text-2xl">
                      <RxUpdate />
                    </p>{" "}
                    <p>/</p>{" "}
                    <p className="text-red-600 cursor-pointer hover:text-2xl">
                      <RiDeleteBin6Fill />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
