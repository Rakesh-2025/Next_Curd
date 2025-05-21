"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  let [name, setName] = useState("");
  let [comp, setComp] = useState("");
  let [sal, setSal] = useState("");
  
  let nameData = (e) => {
    setName(e.target.value);
  };
  let compData = (e) => {
    setComp(e.target.value);
  };
  let salData = (e) => {
    setSal(e.target.value);
  };
  const router = useRouter();
  let click = (e) => {
    e.preventDefault();
    let datas = { name, comp, sal };
    axios.post("http://localhost:8000/users", datas);
    console.log("Datas", datas);
    alert("user Created...");
    router.push("/Users");
  };

  return (
    <div className="mt-1">
      <article className="create">
        <form>
          <h1>Create user</h1>
          <hr />
          <label>Name :</label>
          <input type="text" value={name} onChange={nameData} />
          <label>Company :</label>
          <input type="text" value={comp} onChange={compData} />
          <label>Salary :</label>
          <input type="text" value={sal} onChange={salData} />
          <button onClick={click}> CREATE</button>
        </form>
      </article>
    </div>
  );
};

export default Home;
