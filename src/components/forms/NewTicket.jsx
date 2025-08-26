import { useEffect, useState } from "react"
import { createNewTicket } from "../../services/TicketService"
import { useNavigate } from "react-router-dom"

export const NewTicket = ({ currentUser }) => {
    const [ticket, setTicket] = useState({ description: "", emergency: false })

    const navigate = useNavigate()

    const handleEmergency = e => {
        const ticketCopy = { ...ticket }
        ticketCopy.emergency = e.target.checked
        setTicket(ticketCopy)
    }

    const handleChange = e => {
        const copyTicket = { ...ticket }
        copyTicket.description = e.target.value
        setTicket(copyTicket)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (ticket.description !== "") {
            const postData = {
                userId: currentUser.id,
                description: ticket.description,
                emergency: ticket.emergency,
                dateCompleted: ""
            }
            createNewTicket(postData).then(() => navigate("/tickets"))
        } else {
            window.alert("give a description")
        }
    }

    return (
        <div className="m-[7rem_auto_0_auto] flex w-[40rem] flex-col items-start justify-around gap-5 rounded-2xl border-1 border-gray-500 bg-gray-300 p-5 shadow-xl">
            <h1 className="text-4xl">New Service Ticket</h1>
            <fieldset className="flex w-[100%] flex-col items-start gap-5">
                <label htmlFor="description">Description</label>
                <textarea
                    onChange={handleChange}
                    className="h-40 w-[30rem] self-center rounded-2xl border-1 bg-gray-100 p-3"
                    name="description"
                    placeholder="Brief description of problem"
                    id="description"
                ></textarea>
            </fieldset>
            <fieldset className="flex items-center justify-start gap-3">
                <label htmlFor="emergency" className="cursor-pointer">
                    Emergency
                </label>
                <input
                    onChange={handleEmergency}
                    type="checkbox"
                    id="emergency"
                    className="mt-[.2rem] cursor-pointer"
                    name="emergency"
                />
            </fieldset>
            <button
                onClick={handleSubmit}
                className="mt-[-4rem] cursor-pointer self-end rounded-2xl border-1 border-blue-200 bg-blue-300 p-3 font-semibold shadow-lg hover:scale-110 hover:bg-blue-400"
            >
                Submit Ticket
            </button>
        </div>
    )
}
