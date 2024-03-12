"use client";
import React from "react";

import { Tickets } from "../utils/interface";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import EditTicketForm from "./EditTicketForm";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  ticket: Tickets;
}
const EditTicketPage = ({ ticket }: Props) => {
  const size = useWindowSize();

  return (
    <div className="flex flex-col">
      <Nav title="ticket app" />
      {size.width! > 850 ? (
        <div className="grid grid-cols-[150px_auto]">
          <Sidebar />
          <div className="bg-maincontent h-[calc(100vh-50px)]">
            <EditTicketForm ticket={ticket} />
          </div>
        </div>
      ) : (
        <div className="grid">
          <div className="bg-maincontent h-[calc(100vh-50px)]">
            <EditTicketForm ticket={ticket} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTicketPage;
