import { useEffect, useState } from "react"
import {
    getCustomerById,
    updateCustomer
} from "../../services/customersService"
import { useNavigate } from "react-router-dom"

export const CustomerForm = ({ currentUser }) => {
    const [customer, setCustomer] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getCustomerById(currentUser.id).then(res => setCustomer(res[0]))
    }, [currentUser])

    const handleChange = e => {
        const customerCopy = { ...customer }
        customerCopy[e.target.name] = e.target.value
        setCustomer(customerCopy)
    }

    const saveProfile = e => {
        e.preventDefault()

        updateCustomer(customer.id, customer).then(() => navigate("/"))
    }

    return (
        <form
            action=""
            className="m-auto mt-[8rem] flex w-[50%] flex-col items-start justify-between rounded-2xl bg-[var(--grey-lighter)] p-8 shadow-xl"
        >
            <h1 className="mb-10 text-2xl font-semibold">Update Profile</h1>
            <fieldset className="flex w-[100%] flex-col items-start justify-around gap-3">
                <label htmlFor="address">Address</label>
                <input
                    className="w-[80%] rounded-lg border-1 bg-white pl-2"
                    type="text"
                    id="address"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset className="flex w-[100%] flex-col items-start justify-around gap-3">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                    className="w-[80%] rounded-lg border-1 bg-white pl-2"
                    type="tel"
                    id="phone-number"
                    name="phoneNumber"
                    value={customer.phoneNumber}
                    onChange={handleChange}
                />
            </fieldset>
            <button
                className="text-grey-300 mt-5 h-10 w-30 cursor-pointer self-end rounded-4xl border-1 bg-blue-300 shadow-sm hover:scale-105 hover:bg-blue-400"
                onClick={saveProfile}
            >
                Save Profile
            </button>
        </form>
    )
}
