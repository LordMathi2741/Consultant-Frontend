import React from 'react';
import "../app/globals.css";
import {SignInOptions} from "@/app/components/sign-in-options";
import CustomToolbar from "@/app/public/components/custom-toolbar";

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