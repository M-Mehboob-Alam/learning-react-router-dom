import { Link, NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../data";
export default function invoice(){
    let  invoices = getInvoices();
    return (
        <main className="text-center">
            <Outlet></Outlet>
                <div className="flex flex-col gap-3 mt-5">
                    {invoices.map(invoice =>(
                        <NavLink 
                        to={`/invoice/${invoice.name}`}
                        key={invoice.name}
                        style={({isActive})=> {
                            return {
                                color : isActive ? 'white' : '',
                                backgroundColor : isActive ? 'black': ''
                            
                            }
                        }}
                        className="bg-gray-200"
                        >
                            {invoice.name}
                        </NavLink>
                        // <Link 
                        // to={`/invoice/${invoice.name}`}
                        // key={invoice.name}
                        
                        // className="bg-gray-200">
                        //     {invoice.name}
                        // </Link>
                    ))}
                </div>
                
        </main>
    )
}