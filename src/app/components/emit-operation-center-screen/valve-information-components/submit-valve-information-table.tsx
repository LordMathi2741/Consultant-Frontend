import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { OperationCenterService } from "@/app/helpers/operation-center.service";
import {useRouter} from "next/navigation";
import CustomButton from "@/app/public/components/custom-button";
import {
    InputTableValve
} from "@/app/components/emit-operation-center-screen/valve-information-components/table-options-valve";

export function SubmitValveInformationTable() {
    const [cylinderId, setCylinderId] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedCylinder = JSON.parse(sessionStorage.getItem('cylinder') || '{}');
        setCylinderId(storedCylinder.id);
    }, []);




    const [valve, setValve] = useState({
        brand: "",
        model: "",
        serieNumber: "",
        cylinderId: null
    });

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setValve((prevValues) => ({
            ...prevValues,
            [field]: value,
            cylinderId: cylinderId
        }));
    };

    async function submitValve() {
        await OperationCenterService.prototype.SubmitValve(valve).then((response) => {
            sessionStorage.setItem('valve', JSON.stringify(response.data));
            router.push('/owner-form');
        }).catch(()=>{
            alert("Error while submitting the valve, please check the params.");
        });
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
            <DataTable
                className="p-10"
                value={[valve]}
                header="VÁLVULA"
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column
                    header="Marca"
                    body={() => <InputTableValve valve={valve} onInputChange={onInputChange} propertyKey={"brand"} placeholder={"Marca:"} />}
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
                    header="Modelo"
                    body={() => <InputTableValve valve={valve} onInputChange={onInputChange} propertyKey={"model"} placeholder={"Modelo:"} />}
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
                    body={() => <InputTableValve valve={valve} onInputChange={onInputChange} propertyKey={"serieNumber"} placeholder={"Nº Serie:"} />}
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
            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={submitValve} />

        </div>
    );
}