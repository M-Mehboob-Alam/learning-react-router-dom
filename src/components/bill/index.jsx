import { useParams } from "react-router-dom";
export default function Bills(){
    let param = useParams();
    console.log(param);
    return (
        <div className="text-center">
            <h1>Welcome {param.invoiceName}!</h1>
        </div>
    )
}