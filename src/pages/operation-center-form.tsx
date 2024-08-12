import CustomToolbar from "@/app/public/components/custom-toolbar";
import {OperationCenterTableInformation} from "@/app/components/operation-center-table-information";

function OperationCenterForm(){
    return (
        <div>
            <CustomToolbar/>
            <div className="operation-center-container flex justify-center items-center">
                <OperationCenterTableInformation/>
            </div>
        </div>

    )
}
export default OperationCenterForm;