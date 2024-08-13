import CustomToolbar from "@/app/public/components/custom-toolbar";
import {SubmitCylinderInformationTable} from "@/app/components/submit-cylinder-information-table";
import {SubmitValveInformationTable} from "@/app/components/submit-valve-information-table";
import {FormSubmitProvider, useFormSubmit} from "@/app/context/form-submit-context";
import CustomButton from "@/app/public/components/custom-button";
import React from "react";
import {SubmitOwnerInformationTable} from "@/app/components/submit-owner-information-table";

function OperationCenterForm(){
    const {onSubmit} = useFormSubmit();
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center flex-col gap-5">
                <SubmitCylinderInformationTable/>
                <SubmitValveInformationTable/>
                <SubmitOwnerInformationTable/>
                <CustomButton text={"Submit"} color={"bg-emerald-500"} onClick={onSubmit} />
            </div>
        </div>

    )
}
export default function OperationCenterFormWrapper() {
    return (
        <FormSubmitProvider>
            <OperationCenterForm />
        </FormSubmitProvider>
    );
}