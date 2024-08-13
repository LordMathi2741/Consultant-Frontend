import {DataTable} from "primereact/datatable";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {OperationCenterService} from "@/app/helpers/operation-center.service";
import {Column} from "primereact/column";
import {InputTableCertifier} from "@/app/components/table-options-certifier";
import CustomButton from "@/app/public/components/custom-button";

export function SubmitCertifierInformationTable() {

    const [operationCenterId, setOperationCenterId] = useState(null);
    const [certifier, setCertifier] = useState({
        name: "",
        brand: "",
        operationCenterId: null
    });
    const router = useRouter()

    useEffect(() => {
        const id = JSON.parse(sessionStorage.getItem("operationCenter") || "{}").id;
        setOperationCenterId(id)
    }, []);

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setCertifier((prevValues) => ({
            ...prevValues,
            [field]: value,
            operationCenterId: operationCenterId
        }));
    };

    function clearStorage() {
        sessionStorage.removeItem("operationCenter");
        sessionStorage.removeItem("cylinder");
        sessionStorage.removeItem("valve");
        sessionStorage.removeItem("owner");
        sessionStorage.removeItem("vehicle");

    }
    async function submitCertifierInformation() {
        await OperationCenterService.prototype.SubmitCertifier(certifier).then((response) => {
            clearStorage();
            router.push('/emit-card');
        }).catch(() => {
            alert("Error while submitting the certifier, please check the params.");
        });
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
            <DataTable
                className="p-10"
                value={[certifier]}
                header="Taller"
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column
                    header="Nombre"
                    body={() => <InputTableCertifier  certifier={certifier} onInputChange={onInputChange} placeholder={"Nombre:"} propertyKey={"name"}/>}
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
                    header="Marca"
                    body={() => <InputTableCertifier  certifier={certifier} onInputChange={onInputChange} placeholder={"Marca:"} propertyKey={"brand"}/>}
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
            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={submitCertifierInformation} />
        </div>
        )

}