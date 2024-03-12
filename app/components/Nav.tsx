"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useAppContext } from "../context";
import {
  NotificationIcon,
  SettingsIcon,
  ProfileIcon,
  HamburgerIcon,
} from "./Icons";
import { useWindowSize } from "@uidotdev/usehooks";

interface Props {
  title: string;
}

declare global {
  interface Window {
    nav_modal: HTMLFormElement;
  }
}

const SetTheme = dynamic(() => import("../components/SetTheme"), {
  ssr: false,
});

const Nav = ({ title = "" }: Props) => {
  const size = useWindowSize();

  const [profilename, setprofilename] = useState("name");
  const [nickname, setnickname] = useState("nickname");
  const { setFilterClicked } = useAppContext();

  return (
    <nav className="flex space-between bg-nav h-[50px] items-center">
      <div className="flex space-x-4 text-sm gap-x-6 min-w-[200px] pl-[10px]">
        {size.width! > 850 ? (
          <div>logo</div>
        ) : (
          <ul className="flex gap-4">
            <li>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="details-btn">
                  <div className="nav-btn">
                    <HamburgerIcon />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
                >
                  <li className="bg-nav-dropdown-button-no-hover">
                    <div>FILTERS</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div onClick={() => setFilterClicked(1)}>All</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div onClick={() => setFilterClicked(2)}>Started</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div onClick={() => setFilterClicked(3)}>Not Started</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div onClick={() => setFilterClicked(4)}>
                      Emergency Priority
                    </div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div onClick={() => setFilterClicked(5)}>High Priority</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div onClick={() => setFilterClicked(6)}>
                      Medium Priority
                    </div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div onClick={() => setFilterClicked(7)}>Low Priority</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <div className="" onClick={() => setFilterClicked(8)}>
                      None Priority
                    </div>
                  </li>
                  <li className="bg-nav-dropdown-button-no-hover">
                    <Link href="/">HOME</Link>
                  </li>
                  <li className="bg-nav-dropdown-button-no-hover">
                    <div>YOUR WORK</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="bg-nav-dropdown-button-no-hover">
                    <div>PROJECTS</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="bg-nav-dropdown-button-no-hover">
                    <div>TEAM</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="bg-nav-dropdown-button-no-hover">
                    <div>RESOURCES</div>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="bg-nav-dropdown-button ml-[10px]">
                    <Link href="/">Item 1</Link>
                  </li>
                  <li className="btn btn-sm btn-create transition duration-50 hover:scale-[96%] mt-[10px] mb-[10px]">
                    <Link href="/TicketPage/new">
                      <p>CREATE</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="mt-[4px]">logo</div>
            </li>
          </ul>
        )}
      </div>

      {size.width! > 850 ? (
        <ul className="lekton400 text-sm flex grow pl-[10px] pt-[6px] gap-x-6">
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="details-btn">
                <div className="nav-btn">
                  <Link href="/">Home</Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="details-btn">
                <div className="nav-btn">Your Work</div>
              </div>
              <ul
                tabIndex={0}
                className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
              >
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="details-btn">
                <div className="nav-btn">Projects</div>
              </div>
              <ul
                tabIndex={0}
                className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
              >
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="details-btn">
                <div className="nav-btn">Team</div>
              </div>
              <ul
                tabIndex={0}
                className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
              >
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="details-btn">
                <div className="nav-btn">Resources</div>
              </div>
              <ul
                tabIndex={0}
                className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
              >
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="btn btn-sm btn-create transition duration-50 hover:scale-[96%] mt-[-6px]">
            <Link href="/TicketPage/new">
              <p>CREATE</p>
            </Link>
          </li>
        </ul>
      ) : (
        <div></div>
      )}

      <div className="flex grow justify-end">
        <ul className="lekton400 text-sm flex gap-x-3">
          <li>
            <div className="dropdown dropdown-hover dropdown-end details-btn">
              <div tabIndex={0} className="m-1 main-menu-icons">
                <NotificationIcon />
              </div>
              <ul
                tabIndex={0}
                className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
              >
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="dropdown dropdown-hover dropdown-end details-btn">
              <div tabIndex={0} className="m-1 main-menu-icons">
                <SettingsIcon />
              </div>
              <ul
                tabIndex={0}
                className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
              >
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
                <li className="bg-nav-dropdown-button">
                  <Link href="/">Item 1</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="lekton400 text-sm">
              <SetTheme />
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="details-btn">
                <div className="lekton400 text-sm pr-6">
                  <button>
                    <ProfileIcon />
                  </button>
                </div>
                <ul
                  tabIndex={0}
                  className="bg-nav-dropdown dropdown-content z-[1] p-1 shadow"
                >
                  <li className="">
                    {profilename}
                    <br />
                    &#34;{nickname}&#34;
                    <br />
                  </li>

                  <li className="btn btn-sm btn-create transition duration-50 hover:scale-[96%] mt-[10px] mb-[10px]">
                    <Link href="#" onClick={() => window.nav_modal.showModal()}>
                      <p>EDIT PROFILE</p>
                    </Link>
                  </li>
                </ul>
                <dialog id="nav_modal" className={`modal`}>
                  <form method="dialog" className="bg-modal-dropdown modal-box">
                    <h3 className="poppins700">this is a modal</h3>
                    <div className="flex flex-col ekton400 text-sm py-4">
                      <div>
                        <p>
                          <b>name is:</b>
                        </p>
                        <input
                          className="input rounded-none bg-modal h-[20px] mb-[10px]"
                          value={profilename}
                          maxLength={10}
                          onChange={(event) => {
                            setprofilename(event.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <p>
                          <b>nickname is:</b>
                        </p>
                        <input
                          className="input rounded-none bg-modal h-[20px] mb-[10px]"
                          value={nickname}
                          maxLength={10}
                          onChange={(event) => {
                            setnickname(event.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <p>
                          <b>email is:</b>
                        </p>
                      </div>
                    </div>
                  </form>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
