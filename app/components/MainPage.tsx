"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context";
import { Tickets } from "../utils/interface";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import TicketCard from "./TicketCard";
import { useWindowSize } from "@uidotdev/usehooks";

const MainPage = ({ ticket }: any) => {
  const size = useWindowSize();
  const { submenuClicked } = useAppContext();
  const { filterClicked } = useAppContext();
  const [filteredtickets, setfilteredtickets] = useState(ticket);
  const { deletedTicket } = useAppContext();
  const { setDeletedTicket } = useAppContext();
  const { addedTicket } = useAppContext();

  // useEffect(() => {
  //   if (addedTicket != "") {
  //     ticket.push(addedTicket);
  //     setAddedTicket("");
  //     window.location.reload()
  //   }
  // }, [addedTicket, filteredtickets, setAddedTicket, ticket]);

  useEffect(() => {
    if (addedTicket != "") {
      window.location.reload();
    }
  }, [addedTicket]);

  useEffect(() => {
    if (deletedTicket != null) {
      const newListOfTickets = ticket.filter(
        (ticket: Tickets) => ticket._id !== deletedTicket
      );
      // console.log(
      //   "mainpage - useeffect - deletedticket: " +
      //     "\n amount of tickets: " +
      //     ticket.length +
      //     "\n deleted ticket id is: " +
      //     deletedTicket +
      //     "\n \n all tickets: " +
      //     JSON.stringify(ticket) +
      //     "\n \n filteredTickets is: " +
      //     JSON.stringify(filteredtickets) +
      //     "\n \n new newListOfTickets should be without the deleted ticket: " +
      //     JSON.stringify(newListOfTickets)
      // );

      setfilteredtickets(newListOfTickets);
      setDeletedTicket(null);
    }
  }, [deletedTicket, setDeletedTicket, filteredtickets, ticket]);

  useEffect(() => {
    switch (filterClicked) {
      case 1:
        setfilteredtickets(ticket);
        break;
      case 2:
        const filtered2 = ticket.filter((ticket: Tickets) =>
          ticket.status.includes("started")
        );
        setfilteredtickets(filtered2);
        break;
      case 3:
        const filtered3 = ticket.filter((ticket: Tickets) =>
          ticket.status.includes("not")
        );
        setfilteredtickets(filtered3);
        break;
      case 4:
        const filtered4 = ticket.filter((ticket: Tickets) =>
          ticket.priority.includes("Emergency")
        );
        setfilteredtickets(filtered4);
        break;
      case 5:
        const filtered5 = ticket.filter((ticket: Tickets) =>
          ticket.priority.includes("High")
        );
        setfilteredtickets(filtered5);
        break;
      case 6:
        const filtered6 = ticket.filter((ticket: Tickets) =>
          ticket.priority.includes("Medium")
        );
        setfilteredtickets(filtered6);
        break;
      case 7:
        const filtered7 = ticket.filter((ticket: Tickets) =>
          ticket.priority.includes("Low")
        );
        setfilteredtickets(filtered7);
        break;
      case 8:
        const filtered8 = ticket.filter((ticket: Tickets) =>
          ticket.priority.includes("None")
        );
        setfilteredtickets(filtered8);
        break;
    }
  }, [filterClicked, ticket]);

  return (
    <div className="flex flex-col">
      <Nav title="ticket app" />
      {size.width! > 850 ? (
        <div className="grid grid-cols-[150px_auto]">
          <Sidebar />
          <div className="bg-maincontent h-[calc(100vh-50px)]">
            <Submenu />
            {submenuClicked === 1 ? (
              <div className="flex flex-col">
                {filteredtickets?.length > 0 &&
                  filteredtickets?.map((ticket: Tickets, index: number) => (
                    <TicketCard
                      key={ticket?._id}
                      theindex={index}
                      ticket={ticket}
                    />
                  ))}
              </div>
            ) : (
              <div className="grid gap-x-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bp1350:grid-cols-3 2xl:grid-cols-4">
                {filteredtickets?.length > 0 &&
                  filteredtickets?.map((ticket: Tickets, index: number) => (
                    <TicketCard
                      key={ticket?._id}
                      theindex={index}
                      ticket={ticket}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid">
          <div className="bg-maincontent h-[calc(100vh-50px)]">
            <Submenu />
            {submenuClicked === 1 ? (
              <div className="flex flex-col">
                {filteredtickets?.length > 0 &&
                  filteredtickets?.map((ticket: Tickets, index: number) => (
                    <TicketCard
                      key={ticket?._id}
                      theindex={index}
                      ticket={ticket}
                    />
                  ))}
              </div>
            ) : (
              <div className="grid gap-x-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bp1350:grid-cols-3 2xl:grid-cols-4">
                {filteredtickets?.length > 0 &&
                  filteredtickets?.map((ticket: Tickets, index: number) => (
                    <TicketCard
                      key={ticket?._id}
                      theindex={index}
                      ticket={ticket}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
