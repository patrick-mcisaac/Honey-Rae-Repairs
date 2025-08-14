export const Users = ({ user }) => {
    return (
        <div>
            <div>
                <div className="text-xl">Name</div>
                <div className="text-xl">{user.fullName}</div>
            </div>
            <div>
                <div className="text-xl">Email</div>
                <div className="text-xl">{user.email}</div>
            </div>
        </div>
    )
}
