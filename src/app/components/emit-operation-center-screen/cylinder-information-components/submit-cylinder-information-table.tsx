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
import {
    BrandInformation
} from "@/app/components/emit-operation-center-screen/cylinder-information-components/brand-information";
import {
    InputTableValve
} from "@/app/components/emit-operation-center-screen/valve-information-components/table-options-valve";
export function SubmitCylinderInformationTable() {
    const [id, setId] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [cylinderId, setCylinderId] = useState(null);
    const [cylinder, setCylinder] = useState({
        brand: "",
        serieNumber: "",
        capacity: 0,
        clientId: null
    });

    const [currentCylinders, setCurrentCylinders] = useState([] as any);

    const [valve, setValve] = useState({
        brand: "",
        model: "",
        serieNumber: "",
        cylinderId: null
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

    const onValveChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setValve((prevValues) => ({
            ...prevValues,
            [field]: value,
            cylinderId: cylinderId
        }));
    };


    async function submitCylinder() {
        await OperationCenterService.prototype.SubmitCylinder(cylinder).then((response) => {
            setInfoToSessionStorage(response)
            const storedCylinder = JSON.parse(sessionStorage.getItem('cylinder') || '{}');
            setCylinderId(storedCylinder.id)
            setDialogVisible(true);
        }).catch(() => {
            alert("Error while submitting the cylinder, please check the params.");
        });
    }

    function setInfoToSessionStorage(response:any) {
        sessionStorage.setItem('cylinder', JSON.stringify(response.data));
        setCurrentCylinders(currentCylinders.push(response.data))
        sessionStorage.setItem('currentCylinders', JSON.stringify(currentCylinders));
    }

    async function submitValve() {
      await OperationCenterService.prototype.SubmitValve(valve).then((response) => {
            sessionStorage.setItem('valve', JSON.stringify(response.data));
        }).catch(()=>{
            alert("Error while submitting the valve, please check the params.");
        });
    }


    return (
        <div className=" w-10/12 flex text-center flex-col justify-center items-center  bg-gray-100 shadow-lg rounded-lg p-4 gap-2">
            <BrandInformation/>
            <div className="flex w-full">
                <DataTable
                    className=" w-10/12 md:w-full"
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
                <DataTable
                    className=" w-10/12 md:w-full"
                    value={[valve]}
                    header="VÁLVULA"
                    tableStyle={{ minWidth: '50rem' }}
                >
                    <Column
                        header="Marca"
                        body={() => <InputTableValve valve={valve} onInputChange={onValveChange} propertyKey={"brand"} placeholder={"Marca:"} />}
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
                        body={() => <InputTableValve valve={valve} onInputChange={onValveChange} propertyKey={"model"} placeholder={"Modelo:"} />}
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
                        body={() => <InputTableValve valve={valve} onInputChange={onValveChange} propertyKey={"serieNumber"} placeholder={"Nº Serie:"} />}
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
            </div>
            <CylinderFormDialog submitValve={submitValve} visible={dialogVisible} setVisible={setDialogVisible}/>
           <div className="flex items-end w-full justify-end">
               <CustomButton text={"Siguiente"} color={"bg-emerald-500"} onClick={submitCylinder}/>
           </div>
        </div>
    );
}
