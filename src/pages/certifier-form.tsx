import CustomToolbar from "@/app/public/components/custom-toolbar";
import React from "react";
import {SubmitCertifierInformationTable} from "@/app/components/submit-certifier-information-table";

function CertifierForm(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
                <SubmitCertifierInformationTable/>
            </div>
        </div>
    )
}

export default CertifierForm;