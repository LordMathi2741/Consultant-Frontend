import {DataTable} from "primereact/datatable";
import React, {useEffect, useState} from "react";
import {OperationCenterService} from "@/app/helpers/operation-center.service";
import {useRouter} from "next/navigation";
import {InputOptionOperationCenter} from "@/app/components/table-options-operation-center";
import {Column} from "primereact/column";
import CustomButton from "@/app/public/components/custom-button";


export function SubmitOperationCenterInformationTable(){
    const [id, setId] = useState(null);
    const router = useRouter();
    const [operationCenter, setOperationCenter] = useState({
        name: "",
        legalRepresentative: "",
        address: "",
        phone: "",
        clientId : null
    });

    useEffect(() => {
        const userId = JSON.parse(sessionStorage.getItem('user') || '{}').id;
        setId(userId);
    }, []);


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setOperationCenter((prevValues) => ({
            ...prevValues,
            [field]: value,
            clientId: id
        }));
    };

    async function submitOperationCenter() {
        await OperationCenterService.prototype.SubmitOperationCenter(operationCenter).then((response) => {
            sessionStorage.setItem('operationCenter', JSON.stringify(response.data));
            router.push('/cylinder-form');
        }).catch(() => {
            alert("Error while submitting the operation center, please check the params.");
        });
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
            <DataTable
                className="p-10"
                value={[operationCenter]}
                header="Taller"
                tableStyle={{ minWidth: '50rem' }}
                >
                <Column
                    header="Nombre"
                    body={() => <InputOptionOperationCenter operationCenter={operationCenter} onChange={onInputChange} propertyKey={"name"} placeholder={"Nombre:"} />}
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
                    />

                <Column
                    header="Representante Legal"
                    body={() => <InputOptionOperationCenter operationCenter={operationCenter} onChange={onInputChange} propertyKey={"legalRepresentative"} placeholder={"Representante Legal:"} />}
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
                    />

                <Column
                    header="Dirección"
                    body={() => <InputOptionOperationCenter operationCenter={operationCenter} onChange={onInputChange} propertyKey={"address"} placeholder={"Dirección:"} />}
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
                    />

                <Column
                    header="Teléfono"
                    body={() => <InputOptionOperationCenter operationCenter={operationCenter} onChange={onInputChange} propertyKey={"phone"} placeholder={"Teléfono:"} />}
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
                    />

            </DataTable>

            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={submitOperationCenter} />


        </div>
    )
}