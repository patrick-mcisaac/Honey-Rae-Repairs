import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/TicketService.jsx"
import { Ticket } from "./Ticket.jsx"
import { FilterBar } from "../filter-bar/FilterBar.jsx"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    // initial render
    useEffect(() => {
        getAllTickets().then(ticketsArray => {
            setAllTickets(ticketsArray)
        })
    }, [])

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

    return (
        <div className="flex flex-col items-start p-[2rem_5rem]">
            <h2 className="m-[5rem_0_2rem_0] text-3xl">Tickets</h2>
            {/* placefilter here */}
            <FilterBar
                setShowEmergencyOnly={setShowEmergencyOnly}
                setSearchTerm={setSearchTerm}
            />
            <article className="mt-[2rem] flex w-[100%] flex-wrap items-center justify-between gap-10">
                {filteredTickets.map(ticketObject => {
                    return (
                        <Ticket ticket={ticketObject} key={ticketObject.id} />
                    )
                })}
            </article>
        </div>
    )
}
