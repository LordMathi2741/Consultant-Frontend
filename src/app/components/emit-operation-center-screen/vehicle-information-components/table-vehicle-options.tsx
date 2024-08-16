import React from "react";
import {InputText} from "primereact/inputtext";
import {capitalizeFirstLetter} from "@/app/extensions/extend-methods";

interface VehicleOptionProps {
    vehicle:{
        vehicleIdentifier: string,
    }
    onChanges : (e : React.ChangeEvent<HTMLInputElement>, field: string) => void,
    propertyKey: string,
    placeholder: string,

}

export function InputTableVehicle({vehicle, onChanges, propertyKey , placeholder}: VehicleOptionProps){
    return(
       <InputText
           value={vehicle[propertyKey as keyof typeof vehicle]}
           className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-48"
           placeholder={capitalizeFirstLetter(placeholder)}
           onChange={(e) => onChanges(e, propertyKey)}
           />
    )
}