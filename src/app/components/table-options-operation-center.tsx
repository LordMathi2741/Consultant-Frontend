import {InputText} from "primereact/inputtext";
import React from "react";
import {capitalizeFirstLetter} from "@/app/extensions/extend-methods";

interface InputOptionOperationCenterProps {
    operationCenter:{
        name: string;
        legalRepresentative: string;
        address: string;
        phone: string;
    }
    onChange: (e : React.ChangeEvent<HTMLInputElement>, field: string) => void;
    placeholder: string;
    propertyKey: string;
}

export function InputOptionOperationCenter({operationCenter, onChange, propertyKey, placeholder}: InputOptionOperationCenterProps){
    return (
        <InputText
            value={operationCenter[propertyKey as keyof typeof operationCenter]}
            onChange={(e) => onChange(e, propertyKey)}
            className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-36"
            placeholder={capitalizeFirstLetter(placeholder)}
            />

    )
}