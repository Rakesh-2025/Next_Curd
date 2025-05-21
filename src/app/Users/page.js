"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Users = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((e) => {
      setData(e.data);
      console.log("JsonData", e.data);
    });
  },[]);

  let deleteData = (e) => {
    axios.delete(`http://localhost:8000/users/${e}`);
    alert("user deleted....")

    window.location.reload(); // 🔁 Full reload
    
  };
  return (
    <div className="box">
      {data.map((e) => {
        return (
          <div key={e.id}>
            <table>
              <tr>
                <th>{e.id}</th>
                <th>Id</th>
              </tr>
              <tr>
                <td>NAME :</td>
                <td>{e.name}</td>
              </tr>
              <tr>
                <td>COMPANY :</td>
                <td>{e.comp}</td>
              </tr>
              <tr>
                <td>SALARY :</td>
                <td>{e.sal}</td>
              </tr>
              <tr>
                <td>
                  <Link href={`/Users/Edit_user/${e.id}`}>
                    <button>EDIT</button>
                  </Link>
                </td>
                <td>
                  <Link href="#">
                    <button
                      onClick={() => {
                        deleteData(e.id);
                      }}
                    >
                      DELETE
                    </button>
                  </Link>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
