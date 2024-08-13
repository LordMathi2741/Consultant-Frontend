import React from "react";
import {InputText} from "primereact/inputtext";
import {capitalizeFirstLetter} from "@/app/extensions/extends-methods";

interface SubmitOwnerInformationTableProps {
    owner :{
        firstName: string,
        lastName: string,
        dni: any,
        phone: string,
        address: string,
        district: string,
        province: string,
        department: string,
    }
    onChanges: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void,
    propertyKey: string,
    placeholder: string,
}

export function InputTableOwner({owner, onChanges, propertyKey, placeholder}: SubmitOwnerInformationTableProps){
    return(
        <InputText
            value={owner[propertyKey as keyof typeof owner]}
            onChange={(e) => onChanges(e, propertyKey)}
            className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-48"
            placeholder={capitalizeFirstLetter(placeholder)}
        />
    );

}