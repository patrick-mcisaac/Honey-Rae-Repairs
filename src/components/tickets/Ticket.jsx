import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"

export const Ticket = ({ ticket }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then((res) => setEmployees(res))
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find(
            (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    return (
        <section className="flex w-[100%] flex-col rounded-2xl border-2 p-[1.5rem_2rem]">
            <header className="ticket-info m-[-.5rem_0_0_0]">
                #{ticket.id}
            </header>
            <div>{ticket.description}</div>
            <footer className="mt-5 flex flex-col gap-5 pt-5">
                <div>
                    <div>assignee</div>
                    <div>
                        {assignedEmployee
                            ? assignedEmployee.user?.fullName
                            : "None"}
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
            </footer>
        </section>
    )
}
