import { FaClipboardCheck } from "react-icons/fa";

import { GoPlus } from "react-icons/go";
import { MdSettings } from "react-icons/md";

export const leftSidebarData = [
  {
    title: "Home",
    icon: MdSettings,
    path: "/",
  },
  {
    title: "New Project",
    icon: GoPlus,
    path: "/create",
  },
  {
    title: "Checklists",
    icon: FaClipboardCheck,
  },

  {
    title: "Settings",
    icon: MdSettings,
  },
];
