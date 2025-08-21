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
            const filteredEmp = employee.id === parseInt(employeeId)
            return filteredEmp
        })
        .map(filteredEmp => {
            return (
                <div key={filteredEmp.id}>
                    <div>
                        <div>
                            <p>{filteredEmp.user.fullName}</p>
                            <p>{filteredEmp.specialty}</p>
                        </div>
                        <div>
                            <p>{filteredEmp.user.email}</p>
                            <p>{filteredEmp.rate}</p>
                        </div>
                        <p>
                            Working on {filteredEmp.employeeTickets.length}{" "}
                            tickets
                        </p>
                    </div>
                </div>
            )
        })

    return html
}
