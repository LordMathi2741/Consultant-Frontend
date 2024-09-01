import React from "react";

export function BrandInformation() {
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    return (
        <div className="flex flex-col gap-5 justify-center w-full ">
            <div className="flex  flex-col justify-center items-center gap-5">
                <img src="https://hiperfast.pe/images/logo-hiperfast.png" className="img-size" alt="Brand logo"/>
                <h3 className="underline font-bold text-xs md:text-md lg:text-base xl:text-xl"> CARTA DE
                    AUTORIZACIÓN
                    DEL PROPIETARIO O USUARIO FINAL DEL
                    CILINDRO</h3>
            </div>
            <div className="flex gap-5">
                <h3> Fecha:</h3>
                <p>{`${date}/${month}/${year}`}</p>
            </div>
            <div className="flex flex-col items-start">
                <h3> Señores:</h3>
                <h3><strong> HIPER FAST S.A.C.</strong></h3>
            </div>
            <div className="flex flex-col gap-3 items-start text-start">
                <h3> De mi consideración:</h3>
                <h3> Por la presente, autorizo la destrucción del (de los) cilindros (s) paras <strong> GNV Tipo |</strong>
                    solo en el caso que no cumpliera(n) en forma satisfactoria con los requerimientos  para su puesta en servicio según lo establecido
                    en la <strong> NTP 111.017:2016</strong> con modificatoria <strong> NTP 111.017:2016/MT1 2019</strong> y también según lo establecido en la Carta <strong> INFOGAS Nº 00119-COFIDE/DAF.</strong>
                    Asimismo, autorizo la destrucción de la válvula correspondiente.
                </h3>
                <strong> Dicha autorización se refiere al (los) siguiente(s) cilindros(s) y válvula(s) de mi propiedad: </strong>
            </div>
        </div>
    );
}