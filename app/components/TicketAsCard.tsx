import React from "react";
import { Tickets } from "../utils/interface";
import Link from "next/link";
import DeleteTicket from "./DeleteTicket";

interface Props {
  theindex: Number;
  ticket: Tickets;
}

const TicketAsCard = ({ theindex, ticket }: Props) => {
  const formatTimestamp = (timestamp: any) => {
    const options: Object = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  };

  const createdDateTime = formatTimestamp(ticket.createdAt);

  let priority1 = true;
  let priority2 = false;
  let priority3 = false;
  let priority4 = false;
  let priority5 = false;

  const changeTicketPriority = () => {
    switch (ticket.priority) {
      case "Emergency":
        priority1 = true;
        priority2 = false;
        priority3 = false;
        priority4 = false;
        priority5 = false;
        break;
      case "High":
        priority1 = false;
        priority2 = true;
        priority3 = false;
        priority4 = false;
        priority5 = false;
        break;
      case "Medium":
        priority1 = false;
        priority2 = false;
        priority3 = true;
        priority4 = false;
        priority5 = false;
        break;
      case "Low":
        priority1 = false;
        priority2 = false;
        priority3 = false;
        priority4 = true;
        priority5 = false;
        break;
      case "None":
        priority1 = false;
        priority2 = false;
        priority3 = false;
        priority4 = false;
        priority5 = true;
        break;
      default:
    }
  };

  changeTicketPriority();

  console.log("ticketAsCard - theindex is: " + theindex);

  return (
    <div className="ticketcard-bg rounded-lg shadow-lg sm:w-[300px] md:w-[350px] mb-10">
      <div className="w-full p-4 text-left">
        <div className="flex">
          <div
            className={`align-center ${priority5 ? "dot-green" : ""} ${
              priority4 ? "dot-blue" : ""
            } ${priority3 ? "dot-yellow" : ""} ${
              priority2 ? "dot-orange" : ""
            } ${priority1 ? "dot-pink" : ""}`}
          />
          <h1 className="ticket-title uppercase ml-2">{ticket?.title}</h1>
          <div className="flex grow justify-end items-center">
            <DeleteTicket id={ticket._id} />
          </div>
        </div>
        <div className="flex">
          <div className="ticket-label">TICKET:</div>
          <div className="ticket-label-content">{ticket?.ticketnumber}</div>
        </div>
        <div className="flex">
          <div className="ticket-label">PROJECT:</div>
          <div className="ticket-label-content">{ticket?.project}</div>
        </div>
        <div className="flex">
          <div className="ticket-label">MANAGER:</div>
          <div className="ticket-label-content">{ticket?.manager}</div>
        </div>
        <div className="flex">
          <div className="ticket-label">CATEGORY:</div>
          <div className="ticket-label-category">{ticket?.category}</div>
        </div>
        <div className="flex">
          <div className="ticket-label">CREATED AT:</div>
          <div className="ticket-label-category">{createdDateTime}</div>
        </div>
        <hr className="mt-4" />
        <div className="flex mt-4">
          <div className="ticket-label">PRIORITY:</div>
          <div className="ticket-label-content mr-10">{ticket?.priority}</div>
          <div className="ticket-label">STATUS:</div>
          <div className="ticket-label-content">{ticket?.status}</div>
        </div>
        <div className="flex">
          <div className="ticket-label-description mt-4 mb-4">
            {ticket?.description}
          </div>
        </div>
        <Link
          className="btn btn-updateticket btn-sm mr-3 mt-3"
          href={`/TicketPage/${ticket._id}`}
        >
          Update Ticket
        </Link>
      </div>
    </div>
  );
};

export default TicketAsCard;
