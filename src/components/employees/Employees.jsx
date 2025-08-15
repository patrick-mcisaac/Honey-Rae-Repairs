export const Employees = ({ state }) => {
    return (
        <div className="flex h-50 w-100 flex-col justify-center gap-5 rounded-xl bg-white p-10">
            <div className="flex flex-col gap-2">
                <div className="text-xl">Name</div>
                <div className="text-xl">{state.user.fullName}</div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xl">Email</div>
                <div className="text-xl">{state.user.email}</div>
            </div>
        </div>
    )
}
