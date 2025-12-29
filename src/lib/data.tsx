import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const data = [
    {
        id: 1,
        title: "Experience",
        icon: <FaAward className="text-2xl" />, 
        description: "4 months working"
    },
    {
        id: 2,
        title: "Clients",
        icon: <FiUsers className="text-2xl" />,
        description: "2 clients worked with"
    },
    {
        id: 3,
        title: "Projects",
        icon: <VscFolderLibrary className="text-2xl" />,
        description: "2 projects completed"
    }
];