import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { Employees } from "./Employees"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees().then(res => setEmployees(res))
    }, [])
    return (
        <div className="m-20 flex justify-around">
            {employees.map(employee => {
                return <Employees state={employee} key={employee.id} />
            })}
        </div>
    )
}
