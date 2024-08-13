import React from "react";
import {InputText} from "primereact/inputtext";
import {capitalizeFirstLetter} from "@/app/extensions/extend-methods";

interface TableOptionsCertifierProps{
    certifier:{
        name: string,
        brand : string
    };
    onInputChange : (e : React.ChangeEvent<HTMLInputElement>, field:string ) => void;
    propertyKey: string;
    placeholder: string;
}

export function InputTableCertifier({certifier, onInputChange, propertyKey, placeholder}:TableOptionsCertifierProps){
    return (
        <InputText
            value={certifier[propertyKey as keyof typeof certifier]}
            onChange={(e) => onInputChange(e, propertyKey)}
            className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-36"
            placeholder={capitalizeFirstLetter(placeholder)}/>
    )
}