import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { BiUser, BiBody, BiFootball, BiNotepad } from "react-icons/bi";

export const SideBarData = [
  {
    title: "Players",
    path: "/view-all-player",
    icon: <BiBody />,
    cName: "nav-text",
  },
  {
    title: "Clubs",
    path: "/view-all-club",
    icon: <BiFootball />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/view-all-user",
    icon: <BiUser />,
    cName: "nav-text",
  },
  {
    title: "Posts",
    path: "/view-all-post",
    icon: <BiNotepad />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
