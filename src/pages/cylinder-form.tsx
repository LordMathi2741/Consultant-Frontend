import CustomToolbar from "@/app/public/components/custom-toolbar";
import React from "react";
import {SubmitCylinderInformationTable} from "@/app/components/submit-cylinder-information-table";

export function CylinderFrom(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
                <SubmitCylinderInformationTable/>
            </div>
        </div>
    )
}