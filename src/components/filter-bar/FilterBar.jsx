import { useNavigate } from "react-router-dom"

export const FilterBar = ({
    setShowEmergencyOnly,
    setSearchTerm,
    currentUser,
    setShowOpenOnly
}) => {
    const navigate = useNavigate()
    return (
        <div className="flex w-[100%] flex-row items-center justify-between gap-10">
            {currentUser.isStaff ? (
                <>
                    <button
                        className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-red-600 p-1 text-white shadow-sm shadow-cyan-950"
                        onClick={() => setShowEmergencyOnly(true)}
                    >
                        Emergency
                    </button>
                    <button
                        className="mr-auto w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-blue-400 p-1 shadow-sm shadow-cyan-950"
                        onClick={() => setShowEmergencyOnly(false)}
                    >
                        Show All
                    </button>
                    <input
                        onChange={e => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search Tickets"
                    />
                </>
            ) : (
                <>
                    <button
                        onClick={() => navigate("/tickets/create")}
                        className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-blue-400 p-1 shadow-sm shadow-cyan-950 hover:scale-110"
                    >
                        Create Ticket
                    </button>

                    <button
                        className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-blue-400 p-1 shadow-sm shadow-cyan-950 hover:scale-110"
                        onClick={() => setShowOpenOnly(true)}
                    >
                        Open Tickets
                    </button>
                    <button
                        className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-blue-400 p-1 shadow-sm shadow-cyan-950 hover:scale-110"
                        onClick={() => setShowOpenOnly(false)}
                    >
                        All My Tickets
                    </button>
                </>
            )}
        </div>
    )
}
