
import "../app/globals.css";
import React from "react";
import CustomToolbar from "@/app/public/components/custom-toolbar";
import SignUpOptions from "@/app/components/sign-up-options";
 function SignUpPage() {
    return (
        <div>
            <CustomToolbar/>
            <div className={"sign-up-page-container flex justify-center"}>
                <SignUpOptions/>
            </div>
        </div>
    )
 }

export default SignUpPage;