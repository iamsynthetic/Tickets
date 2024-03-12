import React from "react";
import { Tickets } from "./utils/interface";
import MainPage from "@/app/components/MainPage";
import { revalidatePath } from "next/cache";

interface Params {
  ticket: Tickets;
}

const getTickets = async () => {
  try {
    // const res = await fetch("http://localhost:3000/api/Tickets", {
    const res = await fetch(
      `https://tickets-kkxp43vzm-syntheticsamuraihotmailcoms-projects.vercel.app/api/Tickets`,
      {
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.log("failed to get tickets", error);
  }
};

const TicketDashboard = async () => {
  const thetickets: { tickets: Tickets[] } = await getTickets();
  const tickets = thetickets.tickets;

  revalidatePath("/", "page");

  return (
    <>
      {/* <MainPage ticket={tickets} /> */}
      <MainPage ticket={tickets as unknown as Tickets} />
    </>
  );
};

export default TicketDashboard;
