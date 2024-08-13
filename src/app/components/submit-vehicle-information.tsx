import {DataTable} from "primereact/datatable";
import React, {useEffect, useState} from "react";
import {OperationCenterService} from "@/app/helpers/operation-center.service";
import {Column} from "primereact/column";
import {InputTableVehicle} from "@/app/components/table-vehicle-options";
import {useRouter} from "next/navigation";
import CustomButton from "@/app/public/components/custom-button";


export function SubmitVehicleInformation(){
    const [vehicle, setVehicle] = useState({
        vehicleIdentifier: "",
        owerId: null,
        cylinderId: null,
    });
    const [ownerId, setOwnerId] = useState(null);
    const [cylinderId, setCylinderId] = useState(null);
    const router = useRouter();


    useEffect(() => {
        setOwnerIdFromStorage();
        setCylinderIdFromStorage();
    }, []);


    function setOwnerIdFromStorage(){
        const id = JSON.parse(sessionStorage.getItem('owner') || '{}').id;
        setOwnerId(id);
    }

    function setCylinderIdFromStorage(){
        const id = JSON.parse(sessionStorage.getItem('cylinder') || '{}').id;
        setCylinderId(id);

    }


    const onChanges = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const value = e.target.value;
        setVehicle((prevValues) => ({
            ...prevValues,
            [field]: value,
            ownerId: ownerId,
            cylinderId: cylinderId
        }));
    }

    async function submitVehicle(){
        await OperationCenterService.prototype.SubmitVehicle(vehicle).then((response) => {
            sessionStorage.setItem("vehicle", JSON.stringify(response));
            router.push("/operation-center-details-form");
        }).catch(() => {
            alert("Error while submitting vehicle information. Please try again.")
        })

    }

    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 shadow-lg rounded-lg p-4">
        <DataTable
            className="p-10"
            value={[vehicle]}
            header="Datos del vehiculo"
            tableStyle={{ minWidth: '50rem' }}
        >
            <Column
                header="Número de placa"
                body={() => <InputTableVehicle vehicle={vehicle} onChanges={onChanges} propertyKey={"vehicleIdentifier"} placeholder={"Numero de placa:"}/>}
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
            <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={submitVehicle} />
        </div>
    )
}