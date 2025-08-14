export const Employees = ({ state }) => {
    return (
        <div>
            <div>
                <div className="text-xl">Name</div>
                <div className="text-xl">{state.user.fullName}</div>
            </div>
            <div>
                <div className="text-xl">Email</div>
                <div className="text-xl">{state.user.email}</div>
            </div>
        </div>
    )
}
