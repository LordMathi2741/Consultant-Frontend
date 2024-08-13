import {useFormSubmit} from "@/app/context/form-submit-context";
import React, {useEffect, useState} from "react";
import {OperationCenterService} from "@/app/helpers/operation-center.service";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputTableOwner} from "@/app/components/table-options-owner";

export function SubmitOwnerInformationTable(){
    const { addSubmitListener } = useFormSubmit();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [owner, setOwner] = useState({
        firstName: "",
        lastName: "",
        dni: null,
        phone: "",
        address: "",
        district: "",
        province: "",
        department: "",

    });

    const onChanges = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
       const value = e.target.value;
         setOwner((prevValues) => ({
              ...prevValues,
              [field]: value
         }));
    }

    async function submitOwner(){
        if(isSubmitting) return;

        setIsSubmitting(true);
        try {
            setOwner((prevValues) => {
                const updatedOwner = { ...prevValues };
                OperationCenterService.prototype.SubmitOwner(updatedOwner)
                    .then((response) => {
                        sessionStorage.setItem('owner', JSON.stringify(response.data));
                    })
                    .catch((error) => {
                        alert("Error while submitting the owner.");
                    });
                return updatedOwner;
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    useEffect(() => {
        const submitListener = () => {
            submitOwner();
        }
        addSubmitListener(submitListener);
        return () => {

        };
    }, []);
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
            <DataTable
                className="p-10"
                value={[owner]}
                header="DATOS DEL PROPIETARIO O USUARIO"
                tableStyle={{ minWidth: '50rem' }}>

            <Column
                header="Nombre"
                body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"Ingrese su nombre:"} propertyKey={"firstName"}/>}
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
            }}/>

            <Column
            header="Apellido"
            body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"Ingrese su apellido:"} propertyKey={"lastName"}/>}
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
            }}/>

            <Column
                header="DNI"
                body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"DNI:"} propertyKey={"dni"}/>}
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
                }}/>

                <Column
                    header="Phone"
                    body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"Phone:"} propertyKey={"phone"}/>}
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
                    }}/>

                <Column
                    header="Address"
                    body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"Address:"} propertyKey={"address"}/>}
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
                    }}/>

                <Column
                    header="District"
                    body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"District:"} propertyKey={"district"}/>}
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
                    }}/>

                <Column
                    header="Province"
                    body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"Province:"} propertyKey={"province"}/>}
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
                    }}/>

                <Column
                    header="Department"
                    body={() => <InputTableOwner  onChanges={onChanges} owner={owner} placeholder={"Department:"} propertyKey={"department"}/>}
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
                    }}/>

            </DataTable>





        </div>
    )
}