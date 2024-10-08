
import "../app/globals.css";
import CustomToolbar from "@/app/public/components/custom-toolbar";
import React from "react";
import {
    SubmitOwnerDetails
} from "@/app/components/emit-operation-center-screen/owner-information-components/submit-owner-details";

function OwnerForm(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
                <SubmitOwnerDetails/>
            </div>
        </div>
    )
}

export default OwnerForm;