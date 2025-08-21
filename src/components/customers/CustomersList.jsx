import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { Users } from "../users/Users.jsx"
import { Link } from "react-router-dom"

export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => setCustomers(customerArray))
    }, [])

    return (
        <div className="m-[5rem] flex flex-wrap items-center justify-between gap-20">
            {customers.map(customerObj => {
                return (
                    <Link
                        to={`/customers/${customerObj.id}`}
                        key={customerObj.id}
                    >
                        <Users user={customerObj} />
                    </Link>
                )
            })}
        </div>
    )
}
