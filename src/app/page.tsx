const Page = () => {
  const hora = new Intl.DateTimeFormat('pt-BR',{
    timeStyle: 'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();
  let horario = '';

  if(hour >= 0 && hour <12){
    horario = 'Bom Dia';
  }else if(hour >= 12 && hour < 18){
    horario = 'Boa Tarde';
  }else{
    horario = 'Boa Noite';
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="text-9xl">{hora}</div>
        <div className="text-5xl">{horario}</div>
    </div>  
      
  );
}

export default Page;