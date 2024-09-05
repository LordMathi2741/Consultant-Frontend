import {Card} from "primereact/card";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {InputText} from "primereact/inputtext";
import {OperationCenterService} from "@/app/helpers/operation-center.service";
import CustomButton from "@/app/public/components/custom-button";
import {
    InputTableVehicle
} from "@/app/components/emit-operation-center-screen/vehicle-information-components/table-vehicle-options";
export function SubmitOwnerDetails(){
    const router = useRouter();
    const [owner, setOwner] = useState({
        firstName: "",
        lastName: "",
        dni: "",
        phone: "",
        address: "",
        district: "",
        province: "",
        department: "",
    });

    const [vehicle, setVehicle] = useState({
        vehicleIdentifier: "",
        ownerId: null,
        cylinderId: null,
    });


    const [statusCode, setStatusCode] = useState(0);

    const [fullName, setFullName] = useState("");
    const [cylinderId, setCylinderId] = useState(null);
    const [ownerId, setOwnerId] = useState(null);

    async function submitOwnerDetails(){
        setOwner({
            ...owner,
            firstName: fullName.split(" ")[0],
            lastName: fullName.split(" ")[1]
        })
        const response = await OperationCenterService.prototype.SubmitOwner(owner);
        sessionStorage.setItem("owner", JSON.stringify(response));
        setStatusCode(response.status);

    }

    useEffect(() => {
        const cylinderId = JSON.parse(sessionStorage.getItem('cylinder') || '{}').id;
        setCylinderId(cylinderId);
    }, []);

    async function submitVehicleDetails(){
        getOwnerIdFromStorage()
        setVehicle({
            ...vehicle,
            ownerId: ownerId,
            cylinderId: cylinderId
        })
        await OperationCenterService.prototype.SubmitVehicle(vehicle).then((response) => {
            sessionStorage.setItem("vehicle", JSON.stringify(response));
            setStatusCode(response.status)
        }).catch(() => {
            alert("Error while submitting vehicle information. Please try again.")
        })
        console.log("Vehicle response", vehicle)
    }

    function getOwnerIdFromStorage(){
        const id = JSON.parse(sessionStorage.getItem('owner') || '{}').id;
        setOwnerId(id);
    }


    async function submitData(){
        await submitOwnerDetails().then(async ()=>{
            await submitVehicleDetails()
        });
        if(statusCode == 201){
            alert("Data submitted successfully")
            router.push("/operation-center-details-form")
        }
    }

    return (
        <div>
            <Card className="bg-gray-200 p-16 rounded-lg mx-auto">
                <div className="text-xs md:text-md lg:text-base xl:text-lg flex justify-center items-center flex-col font-bold gap-5">
                    <h2> A. DATOS DEL PROPIETARIO O USUARIO (En caso de reinstalación, se consignará el propietario correspondiente al vehículo del que se desmontó el cilindro</h2>
                    <div className="flex justify-evenly items-center  gap-5 w-full">
                        <h2> Nombres y Apellidos: </h2>
                        <InputText value={fullName} onChange={(e) => setFullName(e.target.value)} className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg  md:text-md w-36  lg:w-48" placeholder="Nombres y Apellidos"/>
                    </div>
                    <div className="flex justify-evenly items-center gap-5  w-full ">
                        <h2 > Nº Documento: </h2>
                        <InputText value={owner.dni} onChange={(e) => setOwner({...owner, dni: e.target.value})} className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-32 lg:w-48 ml-10" placeholder="DNI"/>
                    </div>
                    <div className="flex justify-evenly items-center gap-5 w-full">
                        <h2> Teléfono: </h2>
                        <InputText value={owner.phone} onChange={(e) => setOwner({...owner, phone: e.target.value})} className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-32 lg:w-48 ml-20" placeholder="Teléfono"/>
                    </div>
                    <div className="flex justify-evenly items-center gap-5 w-full">
                        <h2> Dirección: </h2>
                        <InputText value={owner.address} onChange={(e) => setOwner({...owner, address: e.target.value})} className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-32 lg:w-48 ml-16" placeholder="Dirección"/>
                    </div>
                    <div className="flex justify-evenly items-center gap-5 w-full ">
                        <h2> Distrito: </h2>
                        <InputText value={owner.district} onChange={(e) => setOwner({...owner, district: e.target.value})} className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-32 lg:w-48 ml-20" placeholder="Distrito"/>
                    </div>
                    <div className="flex justify-evenly items-center gap-5 w-full">
                        <h2> Provincia: </h2>
                        <InputText value={owner.province} onChange={(e) => setOwner({...owner, province: e.target.value})} className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-32 lg:w-48 ml-16" placeholder="Provincia"/>
                    </div>
                    <div className="flex justify-evenly items-center gap-5 w-full">
                        <h2> Departamento: </h2>
                        <InputText value={owner.department} onChange={(e) => setOwner({...owner, department: e.target.value})} className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-32 lg:w-48 ml-8" placeholder="Departamento"/>
                    </div>
                </div>

                <div
                    className="text-xs md:text-md lg:text-base xl:text-lg flex justify-center items-center flex-col font-bold gap-5 mt-10">
                    <h2> B. DATOS DEL VEHÍCULO DE CONVERSIÓN que desmontó el cilindro:</h2>
                    <div className="flex justify-evenly items-center  gap-5 w-full">
                        <h2> Placa: </h2>
                       <InputTableVehicle vehicle={vehicle} onChanges={(e) => setVehicle({...vehicle, vehicleIdentifier: e.target.value})} propertyKey={"vehicleIdentifier"} placeholder={"Ingrese la placa"}/>
                    </div>
                </div>
                <div className="flex justify-between mt-10">
                    <CustomButton text={"Regresar"} color={"bg-emerald-500"}
                                  onClick={() => router.push("/cylinder-form")}/>
                    <CustomButton text={"Siguiente"} color={"bg-emerald-500"} onClick={() => submitData()}/>
                </div>
            </Card>
        </div>
    )
}