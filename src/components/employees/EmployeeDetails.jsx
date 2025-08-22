import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAllEmployees } from "../../services/employeeService"

export const EmployeeDetails = () => {
    const { employeeId } = useParams()
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees().then(res => setEmployees(res))
    }, [])

    let html = employees
        .filter(employee => {
            const filteredEmp = employee.userId === parseInt(employeeId)
            return filteredEmp
        })
        .map(filteredEmp => {
            return (
                <div
                    key={filteredEmp.id}
                    className="grid h-[90vh] place-content-center"
                >
                    <div className="flex h-100 w-200 flex-wrap items-center justify-evenly rounded-2xl border-1 border-black bg-blue-50 shadow-lg">
                        <div className="flex h-20 flex-col items-start justify-evenly gap-2 p-2 text-xl font-semibold">
                            <p className="text-emerald-800">Name:</p>
                            <p>{filteredEmp.user.fullName}</p>
                            <p className="mt-8 text-emerald-800">Specialty:</p>
                            <p>{filteredEmp.specialty}</p>
                        </div>
                        <div className="flex h-20 flex-col items-start justify-evenly gap-2 p-2 text-xl font-semibold">
                            <p className="text-emerald-800">Email:</p>
                            <p>{filteredEmp.user.email}</p>
                            <p className="mt-8 text-emerald-800">Rate:</p>
                            <p>{filteredEmp.rate}</p>
                        </div>
                        <p className="w-[100%] pt-10 text-center text-xl font-semibold">
                            Working on {filteredEmp.employeeTickets.length}{" "}
                            ticket
                            {filteredEmp.employeeTickets.length === 1
                                ? " "
                                : "s"}
                        </p>
                    </div>
                </div>
            )
        })

    return html
}
