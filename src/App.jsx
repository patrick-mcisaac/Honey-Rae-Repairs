import { CustomersList } from "./components/customers/CustomersList.jsx"
import { EmployeeList } from "./components/employees/EmployeeList.jsx"
import { TicketList } from "./components/tickets/TicketList.jsx"
import "./index.css"

export const App = () => {
    return (
        <>
            {/* <TicketList /> */}
            {/* <CustomersList /> */}
            <EmployeeList />
        </>
    )
}
