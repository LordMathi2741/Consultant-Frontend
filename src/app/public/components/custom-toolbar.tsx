"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import 'primeicons/primeicons.css';


export default function CustomToolbar(){
    const router = useRouter()
    const [toggle, setToggle] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        if(sessionStorage.getItem("user")){
            setIsLogged(true)
        }
    });

    function toggleMenu(){
        setToggle(!toggle)
    }

    return (
        <div>
            <nav className="bg-white flex justify-between p-5 ">
                <div className="flex flex-col lg:flex-row gap-5">
                    <img src="https://hiperfast.pe/images/logo-hiperfast.png" className="img-size" alt="Brand logo"/>
                    <img src="http://38.25.38.94:5173/assets/schedule-banner-C5bXLIze.jpeg" className="img-size" alt="Schedule image"/>
                </div>
                <button onClick={toggleMenu} className={`${!toggle ? 'block' : 'hidden'} lg:hidden`}><i className="pi pi-bars"/> </button>
                <ul className={`${toggle ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row text-xs lg:text-base gap-3 mt-6`}>
                    {
                        isLogged ? (
                            <li className="bg-black text-white w-24 hover:cursor-pointer text-center p-2 rounded-lg"><a onClick={() => router.push("/profile")}>Profile</a></li>
                        ) : (
                            <li className=" bg-black text-white w-24 hover:cursor-pointer text-center p-2 rounded-lg"><a onClick={() => router.push("/sign-in")}>Sign In</a></li>
                        )
                    }
                    <button onClick={toggleMenu} className="lg:hidden"><i
                        className="pi pi-times"/></button>
                </ul>
            </nav>
        </div>
    )
}