import {usuario} from '@/data/pessoa';
const Page = () => {

  const gestores = usuario.filter(item => item.profissao === 'gestor');

  
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Só os gestores</h3>

      {gestores.length > 0 &&
      <>
        <h3>Lista:</h3>
        <ul>
          {gestores.map(q => 
            <li key={q.id}>{q.nome} - {q.profissao}</li>
          )}
        </ul>
      </>
      }

    </div>
  );
}

export default Page;

