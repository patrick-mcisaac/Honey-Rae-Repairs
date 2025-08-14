export const FilterBar = ({ setShowEmergencyOnly, setSearchTerm }) => {
    return (
        <div className="flex w-[100%] flex-row items-center justify-between gap-10">
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
        </div>
    )
}
