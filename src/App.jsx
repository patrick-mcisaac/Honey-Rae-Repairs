import React, { useEffect, useState } from "react";
import { getAllTickets } from "./services/TicketService";
import "./index.css";

export const App = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);

  // initial render
  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
    });
  }, []);

  // rerender when state changes
  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency);
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]); //when show emergency only changes

  return (
    <div className="flex flex-col items-start p-[2rem_5rem]">
      <h2 className="m-[5rem_0_2rem_0] text-3xl">Tickets</h2>
      <div className="flex gap-5">
        <button
          className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-red-600 p-1 text-white shadow-sm shadow-cyan-950"
          onClick={() => setShowEmergencyOnly(true)}
        >
          Emergency
        </button>
        <button
          className="w-[8rem] cursor-pointer rounded-xl border-0 border-black bg-blue-400 p-1 shadow-sm shadow-cyan-950"
          onClick={() => setShowEmergencyOnly(false)}
        >
          Show All
        </button>
      </div>
      <article className="mt-[2rem] flex flex-wrap items-center justify-between gap-10">
        {filteredTickets.map((ticket) => {
          return (
            <section
              className="flex h-[8.5rem] w-[100%] flex-col rounded-2xl border-2 p-[1.5rem_2rem]"
              key={ticket.id}
            >
              <header className="ticket-info m-[-.5rem_0_0_0]">
                #{ticket.id}
              </header>
              <div>{ticket.description}</div>
              <footer className="mt-5">
                <div className="flex gap-5">
                  <div className="ticket-info">emergency</div>
                  <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
          );
        })}
      </article>
    </div>
  );
};
