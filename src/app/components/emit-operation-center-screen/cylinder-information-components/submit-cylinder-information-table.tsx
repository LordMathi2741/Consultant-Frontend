import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState } from "react";
import { OperationCenterService } from "@/app/helpers/operation-center.service";

import CustomButton from "@/app/public/components/custom-button";
import {
    InputTableCylinder
} from "@/app/components/emit-operation-center-screen/cylinder-information-components/table-options-cylinder";
import CylinderFormDialog
    from "@/app/components/emit-operation-center-screen/cylinder-information-components/cylinder-form-dialog";
export function SubmitCylinderInformationTable() {
    const [id, setId] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [cylinder, setCylinder] = useState({
        brand: "",
        serieNumber: "",
        capacity: 0,
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
            setDialogVisible(true);
        }).catch(() => {
            alert("Error while submitting the cylinder, please check the params.");
        });
    }


    return (
        <div className=" w-10/12 flex text-center flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
            <div className="flex flex-col gap-5 justify-center items-center">
                <img src="https://hiperfast.pe/images/logo-hiperfast.png" className="img-size" alt="Brand logo"/>
                <h3 className="underline font-bold text-xs md:text-md lg:text-base xl:text-xl"> CARTA DE AUTORIZACIÓN DEL PROPIETARIO O USUARIO FINAL DEL
                    CILINDRO</h3>
            </div>
            <DataTable
                className="p-10 w-10/12 md:w-full"
                value={[cylinder]}
                header="CILINDRO"
                tableStyle={{minWidth: '50rem'}}
            >
                <Column
                    header="Marca"
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange}
                                                    propertyKey={"brand"} placeholder={"Marca:"}/>}
                    headerStyle={{
                        backgroundColor: '#66c85f',
                        color: '#374151',
                        fontWeight: 'bold',
                        padding: '0.75rem',
                        textAlign: 'center'

                    }}
                    bodyStyle={{
                        backgroundColor: '#ffffff',
                        color: '#374151',
                        padding: '0.75rem',
                    }}
                ></Column>

                <Column
                    header="Nº Serie"
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange}
                                                    propertyKey={"serieNumber"} placeholder={"Nº Serie:"}/>}
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
                    header="Capacidad (L)"
                    body={() => <InputTableCylinder cylinder={cylinder} onInputChange={onInputChange}
                                                    propertyKey={"capacity"} placeholder={"Capacidad:"}/>}
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
            <CylinderFormDialog visible={dialogVisible} setVisible={setDialogVisible}/>
            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={submitCylinder}/>
        </div>
    );
}
