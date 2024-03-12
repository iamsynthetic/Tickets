import React from "react";
import { Tickets } from "../utils/interface";
import Link from "next/link";
import DeleteTicket from "./DeleteTicket";

interface Props {
  theindex: Number;
  ticket: Tickets;
}

const TicketAsList = ({ theindex, ticket }: Props) => {
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

  return (
    <div className="flex w-fit pl-10 pr-10">
      <div className="rounded flex p-4 h-full items-center">
        <div className="grid grid-flow-col">
          <div className="ticketlist-row-bg lg:w-[60px] xl:w-[80px]">
            {theindex == 0 && (
              <div className="mb-2 ticketlist-bg ticket-label uppercase">
                Priority
              </div>
            )}
            <div className="list-valign-center ml-2">
              <div
                className={`align-center ${priority5 ? "dot-green" : ""} ${
                  priority4 ? "dot-blue" : ""
                } ${priority3 ? "dot-yellow" : ""} ${
                  priority2 ? "dot-orange" : ""
                } ${priority1 ? "dot-pink" : ""}`}
              />
            </div>
          </div>
          <div className="ticketlist-row-bg font-medium lg:w-[90px] xl:w-[150px]">
            {theindex == 0 && (
              <div className="ticketlist-bg ticket-label uppercase">Title</div>
            )}
            <div className="list-valign-center ticket-label-content">
              {ticket?.title}
            </div>
          </div>
          <div className="ticketlist-row-bg font-medium lg:w-[70px] xl:w-[80px]">
            {theindex == 0 && (
              <div className="mb-2 ticketlist-bg ticket-label uppercase">
                Ticket #
              </div>
            )}
            <div className="list-valign-center ticket-label-content">
              {ticket?.ticketnumber}
            </div>
          </div>
          <div className="ticketlist-row-bg font-medium lg:w-[100px] xl:w-[150px]">
            {theindex == 0 && (
              <div className="mb-2 ticketlist-bg ticket-label uppercase">
                Project
              </div>
            )}
            <div className="list-valign-center ticket-label-content">
              {ticket?.project}
            </div>
          </div>
          <div className="ticketlist-row-bg font-medium lg:w-[100px] xl:w-[150px]">
            {theindex == 0 && (
              <div className="mb-2 ticketlist-bg ticket-label uppercase">
                Manager
              </div>
            )}
            <div className="list-valign-center ticket-label-content">
              {ticket?.manager}
            </div>
          </div>
          <div className="ticketlist-row-bg font-medium lg:w-[100px] xl:w-[200px]">
            {theindex == 0 && (
              <div className="mb-2 ticketlist-bg ticket-label uppercase">
                Category
              </div>
            )}
            <div className="list-valign-center ticket-label-content">
              {ticket?.category}
            </div>
          </div>
          <div className="ticketlist-row-bg font-medium lg:w-[100px] xl:w-[100px]">
            {theindex == 0 && (
              <div className="mb-2 ticketlist-bg ticket-label uppercase">
                Status
              </div>
            )}
            <div className="list-valign-center ticket-label-content">
              {ticket?.status}
            </div>
          </div>
          <div className="ticketlist-row-bg lg:w-[90px] xl:w-[100px]">
            {theindex == 0 && <div className="mb-2 ticketlist-bg">&nbsp;</div>}
            <Link
              className="btn btn-updateticket btn-sm mr-3 mt-3"
              href={`/TicketPage/${ticket._id}`}
            >
              Update Ticket
            </Link>
          </div>

          <div className="ticketlist-row-bg font-medium lg:w-[50px] xl:w-[60px]">
            {theindex == 0 && <div className="mb-2 ticketlist-bg">&nbsp;</div>}
            <div className="lg:ml-5 xl:ml-7 mt-3">
              <DeleteTicket id={ticket._id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketAsList;
