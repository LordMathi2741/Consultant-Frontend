
import React, {useEffect} from "react";
import { Dialog } from 'primereact/dialog';
import {useRouter} from "next/navigation";

interface CustomDialogProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    submitValve: () => void;
}

export default function CylinderFormDialog({ visible, setVisible,submitValve}: CustomDialogProps) {
    const router = useRouter();
    useEffect(() => {
        if (visible) {
            submitValve();
        }
    }, []);
    return (
        <div className={`flex justify-content-center ${visible ? 'fixed inset-0 bg-black bg-opacity-50 z-50' : ''}`}>
            <Dialog className="bg-white p-7 rounded-lg flex flex-col gap-6 justify-center text-center" header="Ventana emergente" visible={visible} style={{ width: '700px' }} onHide={() => {
                if (!visible) return;
                setVisible(false);
            }}>
                <p className="m-0">
                    Desea registrar mas cilindros?
                </p>
                <div className="flex gap-5 justify-center items-center mt-10">
                    <button className="bg-green-500 text-white px-7 py-2 rounded-lg" onClick={() => setVisible(false)}>Si</button>
                    <button className="bg-orange-400 text-white px-7 py-2 rounded-lg" onClick={() => router.push("/owner-form") }>No</button>
                </div>
            </Dialog>
        </div>
    );
}
