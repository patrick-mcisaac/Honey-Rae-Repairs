import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const EmployeeNavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="flex h-[10vh] items-center gap-10 bg-[#333] pl-10 text-white">
            <li>
                <Link to="/tickets">Tickets</Link>
            </li>
            <li>
                <Link to="/employees">Employees</Link>
            </li>
            <li>
                <Link to="/customers">Customers</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            {localStorage.getItem("honey_user") ? (
                <li className="mr-10 ml-auto">
                    <Link
                        to=""
                        onClick={() => {
                            localStorage.removeItem("honey_user")
                            navigate("/", { replace: true })
                        }}
                    >
                        Log Out
                    </Link>
                </li>
            ) : (
                ""
            )}
        </ul>
    )
}
