import { Link, useNavigate } from "react-router-dom"
export const CustomerNav = () => {
    const navigate = useNavigate()
    return (
        <ul className="flex h-[10vh] items-center gap-10 bg-[#333] pl-10 text-white">
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
        </ul>
    )
}
