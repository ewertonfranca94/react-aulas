"use client"

const Page = () => {

  const avisar = (msg: string) => {
    alert(msg);
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={() => avisar('Mensagem 1')}className="p-3  bg-blue-700 text-white mr-3">Clique aqui 1</button>
      <button onClick={() => avisar('Mensagem 2')}className="p-3  bg-blue-700 text-white">Clique aqui 2</button>
    </div>
      
  );
}

export default Page;