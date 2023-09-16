import { Outlet } from "react-router-dom";

export default function invoice(){
    return <div className="text-center">
        Invoices Comp
        <Outlet></Outlet>
    </div>
}