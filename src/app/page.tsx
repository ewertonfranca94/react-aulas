"use client"

import { FormEvent } from "react";

const Page = () => {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('opa mandando...')
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-xl mb-3">Formulario de Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value="Enviar"/>
      </form>
    </div>
      
  );
}

export default Page;