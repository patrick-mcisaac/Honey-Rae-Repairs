import { useEffect, useState } from "react"
import {
    getEmployeeByUserId,
    updateEmployee
} from "../../services/employeeService"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = ({ currentUser }) => {
    const [employee, setEmployee] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getEmployeeByUserId(currentUser.id).then(res => {
            const employeeObj = res[0]
            setEmployee(employeeObj)
        })
    }, [currentUser])

    const handleSave = e => {
        e.preventDefault()

        const editedEmployee = {
            id: employee.id,
            specialty: employee.specialty,
            rate: employee.rate,
            userId: employee.userId
        }

        updateEmployee(editedEmployee).then(() => {
            navigate(`/employees/${currentUser.id}`)
        })
        console.log("clicked")
    }

    const handleChange = e => {
        const stateCopy = { ...employee }
        stateCopy[e.target.name] = e.target.value
        setEmployee(stateCopy)
    }

    return (
        <form className="m-auto mt-[8rem] flex w-[50%] flex-col items-start justify-between rounded-2xl bg-[var(--grey-lighter)] p-8 shadow-xl">
            <h2 className="mb-10 text-2xl font-semibold">Update Profile</h2>
            <fieldset className="flex flex-col items-start justify-around gap-3">
                <label htmlFor="specialty">Specialty:</label>
                <input
                    onChange={handleChange}
                    name="specialty"
                    className="rounded-lg border-1 bg-white pl-2"
                    type="text"
                    id="specialty"
                    required
                    value={employee.specialty ? employee.specialty : ""}
                />
            </fieldset>
            <fieldset className="flex flex-col items-start justify-around gap-3">
                <label htmlFor="rate">Hourly Rate:</label>
                <input
                    onChange={handleChange}
                    name="rate"
                    className="rounded-lg border-1 bg-white pl-2"
                    type="number"
                    required
                    id="rate"
                    value={employee.rate ? employee.rate : 0}
                />
            </fieldset>
            <fieldset className="flex w-[100%] justify-end">
                <button
                    onClick={handleSave}
                    className="text-grey-300 mt-5 h-10 w-30 cursor-pointer rounded-4xl border-1 bg-yellow-200 shadow-sm hover:scale-105 hover:bg-yellow-300"
                >
                    Save Profile
                </button>
            </fieldset>
        </form>
    )
}
