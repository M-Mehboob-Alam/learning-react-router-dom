import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";
export default function invoice(){
    let  invoices = getInvoices();
    return (
        <main className="text-center">
            <Outlet></Outlet>
                <div className="flex flex-col gap-3">
                    {invoices.map(invoice =>(
                        <Link 
                        to={`/invoice/${invoice.name}`}
                        key={invoice.name}
                        
                        className="bg-gray-200">
                            {invoice.name}
                        </Link>
                    ))}
                </div>
                
        </main>
    )
}