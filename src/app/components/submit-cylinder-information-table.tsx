import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState } from "react";
import { OperationCenterService } from "@/app/helpers/operation-center.service";
import { InputTableCylinder } from "@/app/components/table-options-cylinder";
import { useFormSubmit } from "@/app/context/form-submit-context";
import CustomButton from "@/app/public/components/custom-button";
import {useRouter} from "next/navigation";

export function SubmitCylinderInformationTable() {
    const [id, setId] = useState(null);
    const router = useRouter();
    const [cylinder, setCylinder] = useState({
        brand: "",
        serieNumber: "",
        capacity: null,
        clientId: null
    });

    useEffect(() => {
        const userId = JSON.parse(sessionStorage.getItem('user') || '{}').id;
        setId(userId);
    }, []);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setCylinder((prevValues) => ({
            ...prevValues,
            [field]: value,
            clientId: id
        }));
    };

    async function submitCylinder() {
        await OperationCenterService.prototype.SubmitCylinder(cylinder).then((response) => {
            sessionStorage.setItem('cylinder', JSON.stringify(response.data));
            router.push('/valve-form');
        }).catch(() => {
            alert("Error while submitting the cylinder, please check the params.");
        });
    }


    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
            <DataTable
                className="p-10"
                value={[cylinder]}
                header="CILINDRO"
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column
                    header="Marca"
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange} propertyKey={"brand"} placeholder={"Marca:"} />}
                    headerStyle={{
                        backgroundColor: '#66c85f',
                        color: '#374151',
                        fontWeight: 'bold',
                        padding: '0.75rem',
                    }}
                    bodyStyle={{
                        backgroundColor: '#ffffff',
                        color: '#374151',
                        padding: '0.75rem',
                    }}
                ></Column>

                <Column
                    header="Nº Serie"
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange} propertyKey={"serieNumber"} placeholder={"Nº Serie:"} />}
                    headerStyle={{
                        backgroundColor: '#66c85f',
                        color: '#374151',
                        fontWeight: 'bold',
                        padding: '0.75rem',
                    }}
                    bodyStyle={{
                        backgroundColor: '#ffffff',
                        color: '#374151',
                        padding: '0.75rem',
                    }}
                ></Column>

                <Column
                    header="Capacidad"
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange} propertyKey={"capacity"} placeholder={"Capacidad:"} />}
                    headerStyle={{
                        backgroundColor: '#66c85f',
                        color: '#374151',
                        fontWeight: 'bold',
                        padding: '0.75rem',
                    }}
                    bodyStyle={{
                        backgroundColor: '#ffffff',
                        color: '#374151',
                        padding: '0.75rem',
                    }}
                ></Column>
            </DataTable>
            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={submitCylinder} />
        </div>
    );
}
