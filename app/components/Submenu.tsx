import React, { useEffect, useState } from "react";
import { useAppContext } from "../context";

const Submenu = () => {
  const [btn1, setbtn1] = useState("btn-switch-tickets-not-clicked mr-3 mt-4");
  const [btn2, setbtn2] = useState(
    "btn btn-switch-tickets-clicked hover:scale-[96%] btn-sm mr-3 mt-3"
  );
  const [thetitle, setthetitle] = useState("All");

  const { setSubmenuClicked } = useAppContext();
  const { submenuClicked } = useAppContext();
  const { filterClicked } = useAppContext();

  useEffect(() => {
    switch (filterClicked) {
      case 1:
        setthetitle("All");
        break;
      case 2:
        setthetitle("Started");
        break;
      case 3:
        setthetitle("Not Started");
        break;
      case 4:
        setthetitle("Emergency Priority");
        break;
      case 5:
        setthetitle("High Priority");
        break;
      case 6:
        setthetitle("Medium Priority");
        break;
      case 7:
        setthetitle("Low Priority");
        break;
      case 8:
        setthetitle("None Priority");
        break;
    }
  }, [filterClicked]);

  const checkClicked = (id: Number): void => {
    if (id == 1) {
      console.log("checkClicked is 1");
      setbtn1("btn-switch-tickets-not-clicked mr-3 mt-4");
      setbtn2(
        "btn btn-switch-tickets-clicked hover:scale-[96%] btn-sm mr-3 mt-3"
      );
      console.log("1 - submenuClicked is: " + submenuClicked);
      setSubmenuClicked(1);
    } else if (id == 2) {
      console.log("checkClicked is 2");
      setbtn1(
        "btn btn-switch-tickets-clicked hover:scale-[96%] btn-sm mr-3 mt-3"
      );
      setbtn2("btn-switch-tickets-not-clicked mr-3 mt-4");
      setSubmenuClicked(2);
      console.log("2 - submenuClicked is: " + submenuClicked);
    }
  };

  return (
    <>
      <div className="flex justify-between bg-maincontent p-10">
        <div className="flex items-center space-x-4">
          <h1>{thetitle} tickets</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className={`${btn1}`} onClick={() => checkClicked(1)}>
            switch to list
          </div>
          <div className={`${btn2}`} onClick={() => checkClicked(2)}>
            switch to cards
          </div>
        </div>
      </div>
    </>
  );
};

export default Submenu;
