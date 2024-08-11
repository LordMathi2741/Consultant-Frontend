
import React from 'react';
import { InputText } from 'primereact/inputtext';

interface SignUpInputsOptionsProps {
    value: {
        dni: string;
        email: string;
        phone: string;
        address: string;
        password: string;
        username: string;
        company: string;
        firstName: string;
        lastName: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

export default function SignUpInputsOptions({ value, onChange }: SignUpInputsOptionsProps) {
    return (
        <div className="flex justify-center flex-col gap-5">
            <p className="text-sm lg:text-md text-justify text-green-700">Remember your dni must to be 8 digits and
                only numbers</p>
            <InputText type="text"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="DNI:" value={value.dni} onChange={(e) => onChange(e, 'dni')}/>
            <p className="text-sm lg:text-md text-justify text-green-700"> Please provide a valid email, this must to contain @ and .</p>
            <InputText type="email"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="Email:" value={value.email} onChange={(e) => onChange(e, 'email')}/>
            <p className="text-sm lg:text-md text-justify text-green-700"> Remember your phone must to be 9 numbers</p>
            <InputText type="text"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="Phone:" value={value.phone} onChange={(e) => onChange(e, 'phone')}/>
            <InputText type="text"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="Address:" value={value.address} onChange={(e) => onChange(e, 'address')}/>
            <p className="text-xs lg:text-sm text-justify text-green-700"> Remember your password must to contain at least 8 characters and one symbol</p>
            <InputText type="password"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="Password:" value={value.password} onChange={(e) => onChange(e, 'password')}/>
            <InputText type="text"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="Username:" value={value.username} onChange={(e) => onChange(e, 'username')}/>
            <InputText type="text"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="Company:" value={value.company} onChange={(e) => onChange(e, 'company')}/>
            <InputText type="text"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="FirstName:" value={value.firstName} onChange={(e) => onChange(e, 'firstName')}/>
            <InputText type="text"
                       className="border-2 border-gray-400 p-2 text-xs md:text-sm lg:text-base rounded-lg w-64 lg:w-96"
                       placeholder="LastName:" value={value.lastName} onChange={(e) => onChange(e, 'lastName')}/>
        </div>
    );
}
