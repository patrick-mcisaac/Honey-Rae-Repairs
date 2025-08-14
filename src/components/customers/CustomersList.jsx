import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.jsx"
import { Users } from "../users/Users.jsx"

export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => setCustomers(customerArray))
    }, [])

    return (
        <div className="m-20 flex items-center justify-around">
            {customers.map(customerObj => {
                return <Users user={customerObj} key={customerObj.id} />
            })}
        </div>
    )
}
