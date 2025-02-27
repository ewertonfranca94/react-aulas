type Props = {
    frase: string;
    autor?: string;
}

export const Card = ({ frase, autor }: Props) => {
    return (
      <div className="w-96 border-2 border-blue-600 p-3 text-3xl text-center italic">
            <h3 className="text-3xl font-bold italic"> {frase}</h3>
            {autor && 
            <p className="text-right text-sm"> - {autor}</p>
            }
      </div>
    );
  };