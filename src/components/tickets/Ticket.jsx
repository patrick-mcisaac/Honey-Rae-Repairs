import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { assignTicket, closeTicket } from "../../services/TicketService"

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then(res => setEmployees(res))
    }, [])

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

    const handleClose = () => {
        const closedTicket = {
            id: ticket.id,
            userId: ticket.userId,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: new Date()
        }

        closeTicket(closedTicket).then(() => {
            getAndSetTickets()
        })
    }

    return (
        <section className="flex w-[100%] flex-col rounded-2xl border-2 p-[1.5rem_2rem]">
            <header className="ticket-info m-[-.5rem_0_0_0] p-1">
                #{ticket.id}
            </header>
            <div>{ticket.description}</div>
            <footer className="relative mt-5 flex items-center justify-between border-t-1 p-[2rem_2rem_0_0]">
                <div className="w-[50%]">
                    <div>assignee</div>
                    <div>
                        {assignedEmployee
                            ? assignedEmployee.user?.fullName
                            : "None"}
                    </div>
                </div>
                <div className="flex w-[50%] flex-col items-start justify-center">
                    <div className="ticket-info">emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
                <div className="absolute right-10">
                    {/* if logged in user is employee and theres no employee ticket associated with the service ticket, then a button to claim the ticket should display */}
                    {currentUser.isStaff &&
                    !assignedEmployee &&
                    !ticket.dateCompleted ? (
                        <button
                            className="h-10 w-20 cursor-pointer rounded-4xl bg-blue-500 text-center text-white shadow-xs shadow-black text-shadow-black text-shadow-xs hover:scale-105 hover:bg-blue-600"
                            onClick={handleClaim}
                        >
                            Claim
                        </button>
                    ) : (
                        ""
                    )}
                    {/* if the logged in user is the assigned employee and there is no date completed, then a button to close the ticket should display */}
                    {assignedEmployee?.userId === currentUser.id &&
                    !ticket.dateCompleted ? (
                        <button
                            className="h-10 w-20 cursor-pointer rounded-4xl bg-red-500 text-center text-white shadow-xs shadow-black text-shadow-black text-shadow-xs hover:scale-105 hover:bg-red-700"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </footer>
        </section>
    )
}
