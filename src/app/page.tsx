import { EstudanteTable } from "@/componentes/EstudantesTable";
import { estudante } from "@/data/estudantes";

const Page = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-xl mm-5"> Lista de estudantes</h1>
      <EstudanteTable estudantes = {estudante}/>
    </div>
      
  );
}

export default Page;