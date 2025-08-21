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
                <div className="flex h-80 w-200 items-center justify-evenly rounded-2xl border-2 border-black bg-blue-50">
                    <div className="flex h-[100%] flex-col justify-evenly text-xl font-semibold">
                        <p>{customer.user.fullName}</p>
                        <p>{customer.user.email}</p>
                    </div>
                    <div className="flex h-[100%] flex-col justify-evenly text-xl font-semibold">
                        <p>{customer.address}</p>
                        <p>{customer.phoneNumber}</p>
                    </div>
                </div>
            </div>
        )
    })

    return html
}
