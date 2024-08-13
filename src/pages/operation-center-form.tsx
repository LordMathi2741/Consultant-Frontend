import CustomToolbar from "@/app/public/components/custom-toolbar";
import {SubmitCylinderInformationTable} from "@/app/components/submit-cylinder-information-table";
import React from "react";

function OperationCenterForm(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
                <SubmitCylinderInformationTable/>
            </div>
        </div>

    )
}
export default OperationCenterForm;