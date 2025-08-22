import { TicketList } from "../components/tickets/TicketList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { CustomersList } from "../components/customers/CustomersList"
import { Welcome } from "../components/Welcome"
import { NavBar } from "../components/nav/NavBar"
import { Route, Outlet, Routes } from "react-router-dom"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)
        setCurrentUser(honeyUserObject)
    }, [])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<Welcome />} />
                <Route
                    path="tickets"
                    element={<TicketList currentUser={currentUser} />}
                />
                <Route path="employees">
                    <Route index element={<EmployeeList />} />
                    <Route path=":employeeId" element={<EmployeeDetails />} />
                </Route>
                <Route path="customers">
                    <Route index element={<CustomersList />} />
                    <Route path=":customerId" element={<CustomerDetails />} />
                </Route>
            </Route>
        </Routes>
    )
}
