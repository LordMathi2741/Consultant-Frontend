import CustomToolbar from "@/app/public/components/custom-toolbar";
import EmitCardOptions from "@/app/components/emit-card-options";

function EmitCard(){
    return (
        <div>
            <CustomToolbar/>
            <div className={"emit-card-container"}>
                 <EmitCardOptions/>
            </div>
        </div>
    )
}
export default EmitCard;