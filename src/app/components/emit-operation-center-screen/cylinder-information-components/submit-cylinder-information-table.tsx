
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState } from "react";
import { OperationCenterService } from "@/app/helpers/operation-center.service";
import 'primereact/resources/themes/saga-blue/theme.css';

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
import { Button } from "primereact/button";

export function SubmitCylinderInformationTable() {
    const [id, setId] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [isLimit, setIsLimit] = useState(false);
    const [currentIndex , setCurrentIndex] = useState(0);
    const [cylinders, setCylinders] = useState([{
        brand: "",
        serieNumber: "",
        capacity: 0,
        clientId: null
    }]);
    const [valves, setValves] = useState([{
        brand: "",
        model: "",
        serieNumber: "",
        cylinderId: null
    }]);
   const [cylinderId, setCylinderId] = useState(null);

    useEffect(() => {
        const userId = JSON.parse(sessionStorage.getItem('user') || '{}').id;
        setId(userId);
    }, []);

    useEffect(() => {
        cylinders.forEach((_, index) => {
            setCurrentIndex(index);
        });

        if (cylinders.length >= 14) {
            setIsLimit(true);
        }
    }, [cylinders]);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index: number) => {
        const value = e.target.value;
        setCylinders((prevValues) => {
            const newCylinders = [...prevValues];
            newCylinders[index] = {
                ...newCylinders[index],
                [field]: value,
                clientId: id
            };
            return newCylinders;
        });
    };

    const onValveChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index: number) => {
        const value = e.target.value;
        setValves((prevValues) => {
            const newValves = [...prevValues];
            newValves[index] = {
                ...newValves[index],
                [field]: value,
                cylinderId: cylinderId
            };
            return newValves;
        });
    };

    const addNewCylinderAndValve = () => {
        setCylinders([...cylinders, {
            brand: "",
            serieNumber: "",
            capacity: 0,
            clientId: id
        }]);
        setValves([...valves, {
            brand: "",
            model: "",
            serieNumber: "",
            cylinderId: null
        }]);
    };

    async function submitCylinder() {
        for (let i = 0; i < cylinders.length; i++) {
            await OperationCenterService.prototype.SubmitCylinder(cylinders[i]).then((response) => {
                setInfoToSessionStorage(response,);
                const storedCylinder = JSON.parse(sessionStorage.getItem('cylinder') || '{}');
                setCylinderId(storedCylinder.id);
                setDialogVisible(true);
            }).catch(() => {
                alert("Error while submitting the cylinder, please check the params.");
            });
        }
    }

    function displayLimitAlert(){
        alert("You have reached the limit of cylinders, you can't add more cylinders.");
    }


    function setInfoToSessionStorage(response: any) {
        sessionStorage.setItem('cylinder', JSON.stringify(response.data));
        const currentCylinders = JSON.parse(sessionStorage.getItem('currentCylinders') || '[]');
        currentCylinders.push(response.data);
        sessionStorage.setItem('currentCylinders', JSON.stringify(currentCylinders));
    }

    async function submitValve() {
        for (let i = 0; i < valves.length; i++) {
            await OperationCenterService.prototype.SubmitValve(valves[i]).then((response) => {
                sessionStorage.setItem('valve', JSON.stringify(response.data));
            }).catch(() => {
                alert("Error while submitting the valve, please check the params.");
            });
        }
    }

    return (
        <div className="w-10/12 flex text-center flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4 gap-2">
            <BrandInformation />
            {cylinders.map((cylinder, index) => (
                <div key={index} className="flex w-full">
                    <DataTable
                        className="w-10/12 md:w-full"
                        value={[cylinder]}
                        header="CILINDRO"
                        tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column
                            header="Marca"
                            body={() => <InputTableCylinder cylinder={cylinder} onInputChange={(e) => onInputChange(e, "brand", index)} propertyKey={"brand"} placeholder={"Marca:"} />}
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
                            body={() => <InputTableCylinder cylinder={cylinder} onInputChange={(e) => onInputChange(e, "serieNumber", index)} propertyKey={"serieNumber"} placeholder={"Nº Serie:"} />}
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
                            body={() => <InputTableCylinder cylinder={cylinder} onInputChange={(e) => onInputChange(e, "capacity", index)} propertyKey={"capacity"} placeholder={"Capacidad:"} />}
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
                        className="w-10/12 md:w-full"
                        value={[valves[index]]}
                        header="VÁLVULA"
                        tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column
                            header="Marca"
                            body={() => <InputTableValve valve={valves[index]} onInputChange={(e) => onValveChange(e, "brand", index)} propertyKey={"brand"} placeholder={"Marca:"} />}
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
                            body={() => <InputTableValve valve={valves[index]} onInputChange={(e) => onValveChange(e, "model", index)} propertyKey={"model"} placeholder={"Modelo:"} />}
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
                            body={() => <InputTableValve valve={valves[index]} onInputChange={(e) => onValveChange(e, "serieNumber", index)} propertyKey={"serieNumber"} placeholder={"Nº Serie:"} />}
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
            ))
            }
            <div className="flex items-start w-full justify-start">
                {!isLimit?  <Button className="bg-emerald-500 p-2 rounded-xl text-white" onClick={addNewCylinderAndValve}> <i className="pi pi-plus" /> </Button> : <Button className="bg-gray-500 p-2 rounded-xl text-white" onClick={displayLimitAlert}> <i className="pi pi-plus" /> </Button>}
            </div>
            <CylinderFormDialog submitValve={submitValve} visible={dialogVisible} setVisible={setDialogVisible} />
            <div className="flex items-end w-full justify-end">
                <CustomButton text={"Siguiente"} color={"bg-emerald-500"} onClick={submitCylinder} />
            </div>
        </div>
    );
}