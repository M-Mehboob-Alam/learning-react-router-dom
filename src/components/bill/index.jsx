import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
export default function Bills(){
    let param = useParams();
    let invoice = getInvoice(param.invoiceName);
    console.log(param);
    return (
      <main className="flex flex-col w-1/3 p-5 px-5 py-5 mx-auto mt-3 text-center border">
            <h1 className="capitalize">Welcome {invoice.name}!</h1>
            <h2>Due Amount: ${invoice.amount}</h2>
            <h2>Invoice Number: {invoice.no}</h2>
            <h2>Invoice Due Date: {invoice.due}</h2>
      </main>
    )
}