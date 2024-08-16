import React from 'react';
import "../app/globals.css";
import CustomToolbar from "@/app/public/components/custom-toolbar";
import {SignInOptions} from "@/app/components/auth/sign-in-options";

function SignInPage(){
    return (
        <div>
            <CustomToolbar/>
            <div className={"sign-in-page-container flex justify-center"}>
                <SignInOptions/>
            </div>
        </div>
    );
}
export default SignInPage;