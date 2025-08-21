import { CustomersList } from "./components/customers/CustomersList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import "./index.css"
import { Outlet, Route, Routes } from "react-router-dom"

export const App = () => {
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
                <Route path="tickets" element={<TicketList />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="customers" element={<CustomersList />} />
            </Route>
        </Routes>
    )
}
