import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/TicketService.jsx"
import { Ticket } from "./Ticket.jsx"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])

    // initial render
    useEffect(() => {
        getAllTickets().then((ticketsArray) => {
            setAllTickets(ticketsArray)
        })
    }, [])

    // rerender when state changes
    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter(
                (ticket) => ticket.emergency
            )
            setFilteredTickets(emergencyTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [showEmergencyOnly, allTickets]) //when show emergency only changes

    return (
        <div className="flex flex-col items-start p-[2rem_5rem]">
            <h2 className="m-[5rem_0_2rem_0] text-3xl">Tickets</h2>
            <div className="flex gap-5">
                <button
                    className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-red-600 p-1 text-white shadow-sm shadow-cyan-950"
                    onClick={() => setShowEmergencyOnly(true)}
                >
                    Emergency
                </button>
                <button
                    className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-blue-400 p-1 shadow-sm shadow-cyan-950"
                    onClick={() => setShowEmergencyOnly(false)}
                >
                    Show All
                </button>
            </div>
            <article className="mt-[2rem] flex w-[100%] flex-wrap items-center justify-between gap-10">
                {filteredTickets.map((ticketObject) => {
                    return (
                        <Ticket ticket={ticketObject} key={ticketObject.id} />
                    )
                })}
            </article>
        </div>
    )
}
