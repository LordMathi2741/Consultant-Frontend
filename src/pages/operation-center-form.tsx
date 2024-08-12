import CustomToolbar from "@/app/public/components/custom-toolbar";
import {OperationCenterOptions} from "@/app/components/operation-center-options";

function OperationCenterForm(){
    return (
        <div>
            <CustomToolbar/>
            <div className="flex justify-center">
                <OperationCenterOptions/>
            </div>
        </div>
    )
}
export default OperationCenterForm;