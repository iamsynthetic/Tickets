"use client";
import React from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAppContext } from "../context";

const Sidebar = () => {
  const size = useWindowSize();
  const { setFilterClicked } = useAppContext();

  return (
    <>
      <div className="w-[150px] bg-nav">
        <div className="lekton400 text-sm flex flex-col pl-[10px] pt-[16px]">
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(1)}>
              All
            </div>
          </div>
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(2)}>
              Started
            </div>
          </div>
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(3)}>
              Not Started
            </div>
          </div>
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(4)}>
              Emergency Priority
            </div>
          </div>
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(5)}>
              High Priority
            </div>
          </div>
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(6)}>
              Medium Priority
            </div>
          </div>
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(7)}>
              Low Priority
            </div>
          </div>
          <div className="details-btn pb-[20px]">
            <div className="nav-btn" onClick={() => setFilterClicked(8)}>
              None Priority
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
