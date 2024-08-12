import {http} from "../service/http-common.service";

export class OperationCenterService{
    SubmitCylinder(cylinder){
        return http.post("/cylinder", cylinder)
    }

    SubmitValve(valve){
        return http.post("/valve", valve)
    }

    SubmitObservation(observation){
        return http.post("/observation", observation)
    }

    SubmitOwner(owner){
        return http.post("/owner", owner)
    }

    SubmitVehicle(vehicle){
        return http.post("/vehicle", vehicle)
    }

    SubmitOperationCenter(operationCenter){
        return http.post("/operation-center", operationCenter)
    }

    SubmitCertifier(certifier){
        return http.post("/certifier", certifier)
    }
}