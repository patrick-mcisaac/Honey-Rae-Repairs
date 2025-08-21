import { CustomerDetails } from "./components/customers/CustomerDetails.jsx"
import { CustomersList } from "./components/customers/CustomersList.jsx"
import { EmployeeDetails } from "./components/employees/EmployeeDetails.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { NavBar } from "./components/nav/NavBar.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import { Welcome } from "./components/Welcome.jsx"
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
                <Route index element={<Welcome />} />
                <Route path="tickets" element={<TicketList />} />
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
