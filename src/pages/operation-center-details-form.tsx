import CustomToolbar from "@/app/public/components/custom-toolbar";

import "../app/globals.css";
import React from "react";
import {
    SubmitOperationCenterInformationTable
} from "@/app/components/emit-operation-center-screen/operation-center-details-components/submit-operation-center-information-table";

function OperationCenterDetailsForm(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
            <SubmitOperationCenterInformationTable/>
            </div>
        </div>
    )
}

export default OperationCenterDetailsForm;