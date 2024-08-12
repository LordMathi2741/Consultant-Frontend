import {InputText} from "primereact/inputtext";

import React from "react";

interface TableColumnProps {
    valve: {
        brand: string;
        model: string;
        serieNumber: string;
    };
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
    propertyKey: string;
    placeholder: string;
}
function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function InputTableValve({ valve, onInputChange, propertyKey, placeholder }: TableColumnProps) {
    return (
        <InputText
            value={valve[propertyKey as keyof typeof valve]}
            onChange={(e) => onInputChange(e, propertyKey)}
            className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-36"
            placeholder={capitalizeFirstLetter(placeholder)}
        />
    );
}