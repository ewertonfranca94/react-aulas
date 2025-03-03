import { Emoji } from "@/componentes/Emoji";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-sky-500 to-indigo-500">
        <Emoji nota={5}/>
    </div>  
      
  );
}

export default Page;