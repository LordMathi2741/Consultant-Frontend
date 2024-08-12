import { InputText } from "primereact/inputtext";
import React from "react";

interface OperationCenterInputsOptionsProps {
    values: {
        brand: string;
        serieNumber: string;
        capacity: any;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

export function OperationCenterInputsOptions({ values, onChange }: OperationCenterInputsOptionsProps) {
    return (
        <div className="flex flex-col justify-center gap-5">
            <InputText value={values.brand} onChange={(e) => onChange(e, "brand")} placeholder={"Brand"} className={"w-full"} />
            <InputText value={values.serieNumber} onChange={(e) => onChange(e, "serieNumber")} placeholder={"Series Number"} className={"w-full"} />
            <InputText value={values.capacity} onChange={(e) => onChange(e, "capacity")} placeholder={"Capacity"} className={"w-full"} />
        </div>
    );
}