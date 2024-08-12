import { OperationCenterInputsOptions } from "@/app/components/operation-center-inputs-options";
import React, { useEffect, useState } from "react";
import { OperationCenterService } from "@/app/helpers/operation-center.service";
import CustomButton from "@/app/public/components/custom-button";

export function OperationCenterOptions() {
    const [id, setId] = useState(null);
    useEffect(() => {
        const userId = JSON.parse(sessionStorage.getItem("user") || "{}").id;
        setId(userId);
    }, []);

    const [values, setValues] = useState({
        brand: "",
        serieNumber: "",
        capacity: null,
        clientId: null
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setValues((prevValues) => ({
            ...prevValues,
            [field]: e.target.value,
            clientId: id
        }));
    };

    async function SubmitCylinder() {
        await OperationCenterService.prototype.SubmitCylinder(values).then((response) => {
            alert("Cylinder registered successfully!");
            sessionStorage.setItem("cylinder", response.data);
        }).catch(() => {
            alert("Invalid data, please check the params");
            console.log(values);
        });
    }

    return (
        <div className={"card bg-white rounded-xl flex flex-col justify-center gap-5"}>
            <h2>Please fill all ones:</h2>
            <OperationCenterInputsOptions values={values} onChange={handleChange} />
            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={SubmitCylinder} />
        </div>
    );
}