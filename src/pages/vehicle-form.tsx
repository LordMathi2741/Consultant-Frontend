import CustomToolbar from "@/app/public/components/custom-toolbar";

import React from "react";
import {SubmitVehicleInformation} from "@/app/components/submit-vehicle-information";

function VehicleForm(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
                <SubmitVehicleInformation/>
            </div>
        </div>
    )
}

export default VehicleForm;