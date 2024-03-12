import React from "react";
import EditTicketForm from "../../components/EditTicketForm";
import { Tickets } from "../../utils/interface";

interface Params {
  params: {
    id: string;
  };
}

// const getTicketById = async (id: any) => {
//   console.log("getticketsbyid id is: " + id);
//   try {
//     const res = await fetch(`http://localhost:3000/api/Tickets/tickets/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("failed to fetch topic");
//     }
//     console.log("res.json is: " + res.json());
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

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

let updateTicketData = {};

const TicketPage = async ({ params }: any) => {
  const thetickets: { tickets: Tickets[] } = await getTickets();
  const tickets = thetickets.tickets;
  // console.log("tickets is: " + tickets);
  // console.log("ticket id is: " + tickets[0]._id);

  // const EDITMODE = params.id === "new" ? false : true;

  // const theticket: { tickets: Tickets[] } = await getTicketById(params.id);

  // console.log("tickets list is: " + theticket.tickets);

  // const tickets = theticket.tickets;
  // updateTicketData = theticket.tickets;
  //if params.id is new
  // console.log("params.id is: " + params.id);
  // if (EDITMODE) {
  // updateTicketData = await getTicketById(params.id);
  //   ticket = theticket;
  // } else {
  //   updateTicketData = {
  //     _id: "new",
  //   };
  // }

  // const getData = () => {
  //   let loopdata = new Array<string>();
  //   for (let i = 0; i < tickets.length; i++) {
  //     loopdata.push(tickets[i]._id);
  //   }
  // };
  // getData();

  let theid = params.id;

  console.log("theid is: " + theid);

  let filtered = tickets.filter((item) => item._id.includes(theid));

  console.log("filtered is: " + filtered);

  ///use this here to drill down to the right thing //
  // console.log("filtered items id is: " + JSON.stringify(filtered[0]._id));

  let theticket = filtered[0];
  // console.log("therightone is: " + theticket.category);

  return (
    <>
      <div>params is : {params.id}</div>
      <EditTicketForm ticket={theticket} />
      {/* <div>
        {tickets?.length > 0 &&
          tickets?.map((ticket: Tickets) => (
            // <EditTicketForm key={ticket?._id} ticket={ticket} />
            <div key={ticket?._id}>{ticket?._id}</div>
          ))}
      </div> */}

      {/* <div>{theticket}</div> */}
      {/* <EditTicketForm ticket={params.id} /> */}
      {/* <div className="grid lg:grid-cols-3 xl:grid-cols-3 mt-10">
        {tickets?.length > 0 &&
          tickets?.map((ticket: Tickets) => (
            <EditTicketForm key={ticket?._id} ticket={ticket} />
          ))}
      </div> */}
    </>
  );
};

export default TicketPage;
