"use client"

import { CustomButtom } from "@/componentes/CustomButton";

const Page = () => {

  const handleButton1 = () => alert('Clicou no botão 1');
  const handleButton2 = () => alert('Clicou no botão 2');
  const handleButton3 = () => alert('Clicou no botão 3');

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButtom label="Clique Aqui"   cliquei={handleButton1}/>
      <CustomButtom label="Clique Aqui 2" cliquei={handleButton2}/>
      <CustomButtom label="Clique Aqui 3" cliquei={handleButton3}/>

    </div>
      
  );
}

export default Page;