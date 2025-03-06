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
                    <th className="p-3 text-white">Final Grade</th>
                
                </tr>
            </thead>
            <tbody>
                {estudantes.map(item =>(
                    <tr key={item.id} className="text-gray-800 bg-gray-400 border-gray-600">
                        <td className="p-3 flex items-center">
                            <img src={item.avatar} alt={item.name} className="w-10 h-10 roudeded-full mr-3"/>
                            <div>
                                <div className="text-left font-bold">{item.name}</div>
                                <div>{item.email}</div>
                            </div>
                        </td>
                        <td>
                            {item.active && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
                            {!item.active && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
                        </td>
                        <td className="p-3">{item.grade1.toFixed(1)}</td>
                        <td className="p-3">{item.grade2.toFixed(1)}</td>
                        <td className="p-3 font-bold">{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : '--' }</td>

                    </tr>
                ))}

            </tbody>
        </table>
    );
}