"use client";

import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [thememode, setthememode] = useState("");
  let [submenuClicked, setSubmenuClicked] = useState(1);
  let [filterClicked, setFilterClicked] = useState(1);
  let [deletedTicket, setDeletedTicket] = useState(null);
  let [addedTicket, setAddedTicket] = useState("");

  return (
    <AppContext.Provider
      value={{
        thememode,
        setthememode,
        submenuClicked,
        setSubmenuClicked,
        filterClicked,
        setFilterClicked,
        deletedTicket,
        setDeletedTicket,
        addedTicket,
        setAddedTicket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const revalidate = 10;

export function useAppContext() {
  return useContext(AppContext);
}
