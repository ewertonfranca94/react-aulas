type Props = {
    label: string;
    cliquei: () => void;
}

export const CustomButtom = ({ label, cliquei } : Props)  => {
    return (
        <button onClick={cliquei} className="p-3 text-white bg-blue-700">{label}</button>
    );
}