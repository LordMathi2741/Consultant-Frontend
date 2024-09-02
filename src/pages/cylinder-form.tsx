import "../app/globals.css";
import CustomToolbar from "@/app/public/components/custom-toolbar";
import React from "react";
import {
    SubmitCylinderInformationTable
} from "@/app/components/emit-operation-center-screen/cylinder-information-components/submit-cylinder-information-table";

 function CylinderFrom(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5 py-14">
                <SubmitCylinderInformationTable/>
            </div>
        </div>
    )
}
export default CylinderFrom;