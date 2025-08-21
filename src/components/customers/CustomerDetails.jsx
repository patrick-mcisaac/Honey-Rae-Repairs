import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCustomerDetails } from "../../services/customersService.jsx"

export const CustomerDetails = () => {
    //  /customer/3
    // path="/customers/:customerId"
    const [customers, setCustomers] = useState([])
    const { customerId } = useParams() // { customerId: 3}

    useEffect(() => {
        getCustomerDetails().then(res => setCustomers(res))
    }, [customerId])

    const filtered = customers.filter(
        customer => customer.userId === parseInt(customerId)
    )
    const html = filtered.map(customer => {
        return (
            <div
                key={customer.id}
                className="grid h-[90vh] place-content-center"
            >
                <div className="flex h-100 w-200 flex-wrap items-center justify-evenly rounded-2xl border-1 border-black bg-blue-50 shadow-lg">
                    <div className="flex h-[100%] flex-col items-start justify-center text-xl font-semibold">
                        <p className="text-emerald-800">Name:</p>
                        <p>{customer.user.fullName}</p>
                        <p className="mt-8 text-emerald-800">Email:</p>
                        <p>{customer.user.email}</p>
                    </div>
                    <div className="flex h-[100%] flex-col items-start justify-center text-xl font-semibold">
                        <p className="text-emerald-800">Address:</p>
                        <p>{customer.address}</p>
                        <p className="mt-8 text-emerald-800">Phone Number:</p>
                        <p>{customer.phoneNumber}</p>
                    </div>
                </div>
            </div>
        )
    })

    return html
}
