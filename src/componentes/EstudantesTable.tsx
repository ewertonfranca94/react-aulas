import {estudantes} from "@/types/estudante";

type Props = {
    estudantes: estudantes [];
}
export const EstudanteTable = ({estudantes} : Props) => {
    return(
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3 text-white">Nome</th>
                    <th className="p-3 text-white">Status</th>
                    <th className="p-3 text-white">Grade 1</th>
                    <th className="p-3 text-white">Grade 2</th>
                
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}