
import React, { useState } from 'react';
import {UserService} from "@/app/helpers/user.service";
import CustomButton from "@/app/public/components/custom-button";
import {useRouter} from "next/navigation";
import SignUpInputsOptions from "@/app/components/auth/sign-up-inputs-options";

export default function SignUpOptions() {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        dni: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        username: '',
        company: '',
        firstName: '',
        lastName: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [field]: e.target.value
        }));
    };

    async function RequestAuthorization() {
      await UserService.prototype.SignUp(formValues).then(() => {
            alert("You are registered successfully!");
            router.push("/sign-in");
      }).catch(() => {
            alert("Invalid valid or user already register, please check the params");
      });
    }

    return (
        <div className="card bg-white rounded-xl  flex flex-col gap-5">
            <h1 className="text-sm lg:text-xl text-center">Please, given your account details here:</h1>
            <SignUpInputsOptions value={formValues} onChange={handleChange}/>
            <div className="flex flex-col gap-5">
                <CustomButton color={" bg-orange-400"} text={"SignUp"} onClick={RequestAuthorization}/>
                <p className="text-xs lg:text-base text-center"> Do you already registered? </p>
                <CustomButton color={"bg-emerald-500"} text={"SignIn"} onClick={() => router.push("/sign-in")}/>
            </div>
        </div>
    );
}
