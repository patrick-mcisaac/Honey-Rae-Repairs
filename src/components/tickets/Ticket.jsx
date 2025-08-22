import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { assignTicket, getAllTickets } from "../../services/TicketService"

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        const foundEmployee = employees.find(
            employee => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    const handleClaim = () => {
        const currentEmployee = employees.find(
            employee => employee.userId === currentUser.id
        )

        const newEmployeeTicket = {
            employeeId: currentEmployee.id,
            serviceTicketId: ticket.id
        }

        assignTicket(newEmployeeTicket).then(() => {
            getAndSetTickets()
        })
    }

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
                <div>
                    {/* if logged in user is employee and theres no employee ticket associated with the service ticket, then a button to claim the ticket should display */}
                    {currentUser.isStaff && !assignedEmployee ? (
                        <button onClick={handleClaim}>Claim</button>
                    ) : (
                        ""
                    )}
                    {/* if the logged in user is the assigned employee and there is no date completed, then a button to close the ticket should display */}
                    {assignedEmployee?.userId === currentUser.id &&
                    !ticket.dateCompleted ? (
                        <button>Close</button>
                    ) : (
                        ""
                    )}
                </div>
            </footer>
        </section>
    )
}
