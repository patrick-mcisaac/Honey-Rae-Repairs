import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/TicketService.jsx"
import { Ticket } from "./Ticket.jsx"
import { FilterBar } from "../filter-bar/FilterBar.jsx"

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [showOpenOnly, setShowOpenOnly] = useState(false)
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAndSetTickets = () => {
        getAllTickets().then(ticketsArray => {
            if (currentUser.isStaff) {
                setAllTickets(ticketsArray)
            } else {
                const customerTickets = ticketsArray.filter(
                    ticket => ticket.userId === currentUser.id
                )
                setAllTickets(customerTickets)
            }
        })
    }

    // initial render
    useEffect(() => {
        getAndSetTickets()
    }, [currentUser])

    // rerender when state changes
    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter(
                ticket => ticket.emergency
            )
            setFilteredTickets(emergencyTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [showEmergencyOnly, allTickets]) //when show emergency only changes

    // search bar changes
    useEffect(() => {
        const foundTickets = allTickets.filter(ticket =>
            ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])

    // customer filters view
    useEffect(() => {
        if (showOpenOnly) {
            const openTickets = allTickets.filter(
                ticket => ticket.dateCompleted === ""
            )
            setFilteredTickets(openTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [allTickets, showOpenOnly])

    return (
        <div className="flex flex-col items-start p-[0_5rem]">
            <h2 className="m-[2rem_0] text-3xl">Tickets</h2>

            <FilterBar
                setShowEmergencyOnly={setShowEmergencyOnly}
                setSearchTerm={setSearchTerm}
                currentUser={currentUser}
                setShowOpenOnly={setShowOpenOnly}
            />
            <article className="m-[2rem_0] flex w-[100%] flex-wrap items-center justify-between gap-10">
                {filteredTickets.map(ticketObject => {
                    return (
                        <Ticket
                            currentUser={currentUser}
                            ticket={ticketObject}
                            getAndSetTickets={getAndSetTickets}
                            key={ticketObject.id}
                        />
                    )
                })}
            </article>
        </div>
    )
}
