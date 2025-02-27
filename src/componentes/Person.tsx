type Props ={
    name: string;
    avatar?: string;
    roles: string[];
}
export const Person = ({name,
    avatar = 'https://img.freepik.com/vetores-premium/icone-de-perfil-de-avatar-padrao-imagem-de-usuario-de-midia-social-cinza-avatar-icone-em-branco-silhueta-vetor-ilustracao_561158-3485.jpg?w=740',
    roles}: Props) => {
    return (
        <div>
            <h1>{name}</h1>{/* {} para variavel */}
            <img 
                src={avatar}
                alt={name}
                className="w-40"
                />
            <ul>
                <li>{roles[1]}</li>
                <li>{roles[0]}</li>
            </ul>
        
        
        
        </div>
    );
}