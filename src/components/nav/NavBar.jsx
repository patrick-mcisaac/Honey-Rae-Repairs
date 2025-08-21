import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <ul className="flex h-15 items-center gap-10 bg-[#333] pl-10 text-white">
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
            <li className="mr-10 ml-auto">
                <Link to="/logout">Log Out</Link>
            </li>
        </ul>
    )
}
