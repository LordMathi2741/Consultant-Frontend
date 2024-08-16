
import "../app/globals.css";
import CustomToolbar from "@/app/public/components/custom-toolbar";
import React from "react";
import {
    SubmitValveInformationTable
} from "@/app/components/emit-operation-center-screen/valve-information-components/submit-valve-information-table";

function ValveForm() {
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
                <SubmitValveInformationTable/>
            </div>
        </div>
    )
}

export default ValveForm;

