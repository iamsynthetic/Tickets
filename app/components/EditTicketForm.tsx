"use client";
import { useRouter } from "next/navigation";
import { Tickets } from "../utils/interface";
import { useAppContext } from "../context";
import React, { useState } from "react";

interface Props {
  ticket: Tickets;
}

const EditTicketForm = ({ ticket }: Props) => {
  const { setAddedTicket } = useAppContext();

  let EDITMODE: boolean = false;

  if (ticket._id === "new") {
    console.log("checking ticket._id is new " + ticket._id);
    EDITMODE = false;
  } else if (ticket._id !== "new") {
    console.log("checking ticket._id is not new " + ticket._id);
    EDITMODE = true;
  }

  const router = useRouter();

  const theTicketData = {
    title: "",
    ticketnumber: 0,
    project: "",
    manager: "",
    description: "",
    priority: "",
    status: "",
    category: "code fix",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  if (EDITMODE) {
    theTicketData["title"] = ticket.title;
    theTicketData["ticketnumber"] = ticket.ticketnumber;
    theTicketData["project"] = ticket.project;
    theTicketData["manager"] = ticket.manager;
    theTicketData["description"] = ticket.description;
    theTicketData["priority"] = ticket.priority;
    theTicketData["status"] = ticket.status;
    theTicketData["category"] = ticket.category;
    theTicketData["createdAt"] = ticket.createdAt;
    theTicketData["updatedAt"] = ticket.updatedAt;
  }

  const [formData, setFormData] = useState(theTicketData);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleTicketNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleManagerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!res.ok) {
        throw new Error("failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!res.ok) {
        throw new Error("failed to create ticket");
      }
    }

    setAddedTicket(formData);
    router.refresh();
    router.push("/");
  };

  const priorities = ["Emergency", "High", "Medium", "Low", "None"];

  const categories = [
    "code fix",
    "copy fix",
    "missing information",
    "scheduling issue",
    "duplicate issue",
    "other",
  ];

  return (
    <div className="bg-maincontent h-[calc(100vh-50px)]">
      <div className="flex justify-center">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-wrap p-4 justify-center max-w-screen-md"
        >
          <div className="w-full xs:flex xs:justify-center md:justify-start md:ml-[4.5rem]">
            <div className="update-ticket-title mt-16">
              {EDITMODE ? "Update Ticket" : "Create Ticket"}
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex">
              <div className="flex flex-col">
                <label className="update-ticket-label mr-3 mt-3">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="add a title"
                  maxLength={17}
                  onChange={handleTitleChange}
                  required={true}
                  value={formData.title}
                  className="update-ticket-input inputfield input max-w-xs w-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex max-w-[250px]">
              <div className="flex flex-col">
                <label className="update-ticket-label mr-3 mt-3">
                  ticket number
                </label>
                <input
                  id="ticketnumber"
                  name="ticketnumber"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="add a ticket number"
                  onChange={handleTicketNumberChange}
                  required={true}
                  value={formData.ticketnumber}
                  className="update-ticket-input inputfield input max-w-xs w-full"
                />
              </div>
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex  ">
              <div className="flex flex-col">
                <label className="update-ticket-labelmr-3 mt-3">project</label>
                <input
                  id="project"
                  name="project"
                  type="text"
                  placeholder="what is the project name"
                  onChange={handleProjectChange}
                  required={true}
                  value={formData.project}
                  className="update-ticket-input inputfield input w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex  ">
              <div className="flex flex-col">
                <label className="mr-3 mt-3">manager</label>
                <input
                  id="manager"
                  name="manager"
                  type="text"
                  placeholder="who is the manager"
                  onChange={handleManagerChange}
                  required={true}
                  value={formData.manager}
                  className="update-ticket-input inputfield input w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex">
              <div className="flex flex-col ml-3">
                <label className="mr-3 mt-3">description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="describe the ticket"
                  onChange={handleDescriptionChange}
                  required={true}
                  value={formData.description}
                  className="update-ticket-input inputfield input w-full max-w-xs"
                  rows={5 as number}
                />
              </div>
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex w-64 pl-1 ">
              <div className="flex flex-col">
                <label className="mr-3 mt-3">priority</label>
                <select
                  name="priority"
                  onChange={handlePriorityChange}
                  required={true}
                  value={formData.priority}
                  className="update-ticket-input mt-1 bg-slate-50 pt-3 pb-3 pl-2 pr-2 rounded-md"
                >
                  {priorities?.map((priority, _index) => (
                    <option key={_index} value={priority}>
                      {priority}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex ">
              <div className="flex flex-col">
                <label className="mr-3 mt-3">status</label>
                <input
                  id="status"
                  name="status"
                  type="text"
                  placeholder="what is the status?"
                  onChange={handleStatusChange}
                  required={true}
                  value={formData.status}
                  className="update-ticket-input inputfield input w-full max-w-xs"
                />
              </div>
            </div>
          </div>

          <div className="w-full xs:flex xs:justify-center md:w-1/2 md:pl-10">
            <div className="flex ">
              <div className="flex flex-col ml-[-26px]">
                <label className="mr-3 mt-3">category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="update-ticket-input mt-1 bg-slate-50 pt-3 pb-3 pl-2 pr-2 rounded-md"
                >
                  {categories?.map((category, _index) => (
                    <option key={_index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="w-full xs:flex xs:justify-center md:justify-start mt-8 md:ml-[4.5rem]">
            <div className="flex">
              <div className="flex flex-col ml-2">
                <input
                  type="submit"
                  className="btn btn-updateticket btn-sm mr-3 mt-3"
                  value={EDITMODE ? "update ticket" : "create ticket"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTicketForm;
