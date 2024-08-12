import CustomButton from "@/app/public/components/custom-button";
import {useRouter} from "next/navigation";

export default function EmitCardOptions(){
    const router = useRouter();
    return (
        <div className="flex flex-wrap gap-10 justify-center mt-52">
            <CustomButton text={"WorkShop"} color={"bg-emerald-500"} onClick={ ()=> router.push("/sign-in")}/>
            <CustomButton text={"Provider"} color={"bg-emerald-500"} onClick={ ()=> router.push("/sign-in")}/>
            <CustomButton text={"Operation Center"} color={"bg-emerald-500"} onClick={ ()=> router.push("/operation-center-form")}/>
        </div>
    )
}