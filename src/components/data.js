import Expenses from "./expense";

let invoices = [
    {
        'no':1234,
        'name':'alumi',
        'amount':1000,
        'due':'12/18/23'
    },
    {
        'no':1234,
        'name':'shan',
        'amount':1000,
        'due':'12/18/23'
    },
    {
        'no':1234,
        'name':'malik',
        'amount':1000,
        'due':'12/18/23'
    },
    {
        'no':1234,
        'name':'afzaal',
        'amount':1000,
        'due':'12/18/23'
    },
    {
        'no':1234,
        'name':'khan',
        'amount':1000,
        'due':'12/18/23'
    },
];

export function getInvoices(){
    return invoices;
}