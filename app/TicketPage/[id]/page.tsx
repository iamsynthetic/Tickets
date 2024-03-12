import React from "react";
import { Tickets } from "../../utils/interface";
import EditTicketPage from "@/app/components/EditTicketPage";

interface Params {
  ticket: Tickets;
  params: {
    id: string;
  };
}

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("failed to get tickets", error);
  }
};

const TicketPage = async ({ params }: any) => {
  console.log("params.id is: " + params.id);
  const thetickets: { tickets: Tickets[] } = await getTickets();
  const tickets = thetickets.tickets;

  let theticket = {};
  let theid = params.id;

  if (theid === "new") {
    theticket = {
      _id: "new",
      title: "title",
      project: "project",
      ticketnumber: 0,
      description: "description",
      manager: "manager's name",
      category: "category",
      priority: 0,
      progress: 0,
      status: "status",
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    console.log("theid is new theticket is: " + JSON.stringify(theticket));
  } else {
    let filtered = tickets.filter((item) => item._id.includes(theid));
    theticket = filtered[0];
    console.log("the ticket is: " + JSON.stringify(theticket));
  }

  return (
    <div>
      ticket page edit ticket
      <EditTicketPage ticket={theticket as unknown as Tickets} />
      {/* <EditTicketPage ticket={theticket} /> */}
    </div>
  );
};

export default TicketPage;
