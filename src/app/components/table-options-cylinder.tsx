import { InputText } from "primereact/inputtext";
import React from "react";

interface TableColumnProps {
    cylinder: {
        brand: string;
        serieNumber: string;
        capacity: any;
    };
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
    propertyKey: string;
    placeholder: string;
}
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function InputTableCylinder({ cylinder, onInputChange, propertyKey, placeholder }: TableColumnProps) {
    return (
        <InputText
            value={cylinder[propertyKey as keyof typeof cylinder]}
            onChange={(e) => onInputChange(e, propertyKey)}
            className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-36"
            placeholder={capitalizeFirstLetter(placeholder)}
        />
    );
}
