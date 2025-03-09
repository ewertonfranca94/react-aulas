"use client"

import { useState } from "react";

const Page = () => {

  const [nameInput, setNameInput] = useState('');

  const handleBtnClick = () => {
    alert(nameInput);

  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text"  
        className="border border-black p-3 text-xl text-black"
        placeholder="Digite seu nome"
        value={nameInput}
        onChange={event => setNameInput(event.target.value)}
      />
      <p>{nameInput}</p>
      <button onClick={handleBtnClick}>Mostrar Valor </button>
    </div>
  );
}

export default Page;