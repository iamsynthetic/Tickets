"use client";
import React from "react";
import { useAppContext } from "../context";
import { Tickets } from "../utils/interface";
import TicketAsList from "./TicketAsList";
import TicketAsCard from "./TicketAsCard";
import { useWindowSize } from "@uidotdev/usehooks";
import TicketAsListMobile from "./TicketAsListMobile";

interface Props {
  theindex: Number;
  ticket: Tickets;
}

const TicketCard = ({ theindex, ticket }: Props) => {
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
  const size = useWindowSize();
  const { submenuClicked } = useAppContext();

  return (
    <>
      <div className="flex justify-center">
        {size.width! > 1023 && submenuClicked === 1 && (
          <div className="flex justify-center">
            <TicketAsList
              key={ticket?._id}
              theindex={theindex}
              ticket={ticket}
            />
          </div>
        )}
        {size.width! < 1024 && submenuClicked === 1 && (
          <div className="flex justify-center">
            <TicketAsListMobile
              key={ticket?._id}
              theindex={theindex}
              ticket={ticket}
            />
          </div>
        )}
        {submenuClicked === 2 && (
          <div className="flex justify-center">
            <TicketAsCard
              key={ticket?._id}
              theindex={theindex}
              ticket={ticket}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TicketCard;
