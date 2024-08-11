interface CustomButtonProps {
    text: string;
    color: string;
    onClick: () => void;
}

export default function CustomButton({ text, onClick,color }: CustomButtonProps) {
    return (
        <button onClick={onClick} className={`${color} text-white text-xs md:text-sm  lg:text-base p-3 px-4 rounded-lg`}>
            {text}
        </button>
    );
}