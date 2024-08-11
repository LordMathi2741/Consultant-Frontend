

import {UserService} from "@/app/helpers/user.service";
import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {useRouter} from "next/navigation";
import CustomButton from "@/app/public/components/custom-button";
export function SignInOptions(){
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    async function RequestAuthorization() {
        await UserService.prototype.SignIn(email,password).then((response) => {
            alert("You are logged successfully! Your token will expire in 1 hour.");
        }).catch(() => {
            alert("Invalid email or password");
        });

    }

    return (
        <div className="card bg-white rounded-xl  flex flex-col gap-5">
            <h1 className="text-sm lg:text-xl text-center"> Please, given your account details here: </h1>
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center gap-5 p-2">
                    <InputText className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                    <InputText className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <CustomButton color={" bg-emerald-500"} text={"SignIn"} onClick={RequestAuthorization}/>
                <p className="text-xs lg:text-base text-center"> Do you dont have an account yet? </p>
                <CustomButton  color={"bg-orange-400"} text={"SignUp"} onClick={()=>router.push("/sign-up") }/>
            </div>
        </div>
    );
}