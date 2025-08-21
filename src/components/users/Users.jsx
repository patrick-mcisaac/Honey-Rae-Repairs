export const Users = ({ user }) => {
    return (
        <div className="flex h-50 w-100 flex-col justify-center gap-5 rounded-xl bg-white p-10">
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
