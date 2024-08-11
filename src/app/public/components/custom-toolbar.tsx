"use client";
import {useRouter} from "next/navigation";

export default function CustomToolbar(){
    const router = useRouter()
    return (
        <div>
            <nav className="bg-white flex justify-between   p-5 ">
                <div className="flex flex-col lg:flex-row gap-5">
                    <img src="https://hiperfast.pe/images/logo-hiperfast.png" className="img-size" alt="Brand logo"/>
                    <img src="http://38.25.38.94:5173/assets/schedule-banner-C5bXLIze.jpeg" className="img-size" alt="Schedule image"/>
                </div>
                <ul className="flex  gap-3 mt-6">
                    <li className="cursor-pointer">My Profile</li>
                    <li className="cursor-pointer">Emit Card</li>
                </ul>
            </nav>
        </div>
    )
}