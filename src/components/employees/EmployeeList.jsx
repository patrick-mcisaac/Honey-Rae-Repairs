import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { Employees } from "./Employees"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees().then(res => setEmployees(res))
    }, [])
    return (
        <div className="m-[5rem] flex flex-wrap justify-between gap-[5rem_2rem]">
            {employees.map(employee => {
                return (
                    <Link to={`/employees/${employee.id}`}>
                        <Employees state={employee} key={employee.id} />
                    </Link>
                )
            })}
        </div>
    )
}
