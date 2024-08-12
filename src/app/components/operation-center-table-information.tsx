import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, {useEffect, useState} from "react";
import {InputTableCylinder} from "@/app/components/edit-table-options-cylinder";
import {OperationCenterService} from "@/app/helpers/operation-center.service";
import CustomButton from "@/app/public/components/custom-button";

export function OperationCenterTableInformation() {
    const [id, setId] = useState(null);
    useEffect(() => {
        setId(JSON.parse(sessionStorage.getItem('user') || '{}').id);
    });
    const [cylinder, setCylinder] = useState({
        brand: "",
        serieNumber: "",
        capacity: null,
        clientId: null
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        let value: string | number | null = e.target.value;
        if (field === "capacity") {
            value = parseInt(value);
        }
        setCylinder((prevValues) => ({
            ...prevValues,
            [field]: value,
            clientId: id
        }));
    };

    async function SubmitCylinder(){
        await OperationCenterService.prototype.SubmitCylinder(cylinder).then((response) => {
            sessionStorage.setItem('cylinder', JSON.stringify(response.data));
        }).catch(() => {
            console.log(cylinder)
           alert("Error while submitting the cylinder.")
        });
    }


    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
            <DataTable
                className="p-10"
                value={[cylinder]}
                header="Cilindro"
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column
                    header="Marca"
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange}  propertyKey={"brand"} placeholder={"Marca:"}/>}
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
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange}  propertyKey={"serieNumber"} placeholder={"Nº Serie:"}/>}
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
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange}  propertyKey={"capacity"} placeholder={"Capacidad:"}/>}
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
            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={SubmitCylinder}/>
        </div>
    );
}
