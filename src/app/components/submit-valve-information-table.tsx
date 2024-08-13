import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { InputTableValve } from "@/app/components/table-options-valve";
import { OperationCenterService } from "@/app/helpers/operation-center.service";
import {useFormSubmit} from "@/app/context/form-submit-context";

export function SubmitValveInformationTable() {
    const { addSubmitListener } = useFormSubmit();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cylinderId, setCylinderId] = useState(null);

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

    function submitValve() {
        if (isSubmitting) return;

        setIsSubmitting(true);
        try {
            setValve((prevValues) => {
                const updatedValve = { ...prevValues };
                OperationCenterService.prototype.SubmitValve(updatedValve)
                    .then((response) => {
                        sessionStorage.setItem('valve', JSON.stringify(response.data));
                    })
                    .catch(() => {
                        alert("Error while submitting the valve.");
                    });
                return updatedValve;
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    useEffect(() => {
        addSubmitListener(submitValve);
    }, []);

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
        </div>
    );
}