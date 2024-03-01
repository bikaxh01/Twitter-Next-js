import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiBookmarkPlus } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { Inter } from "next/font/google";
import FeedCard from "@/components/Feedcard";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSideBarButtons {
  title: string;
  icon: React.ReactNode;
}

const sideMenuButtons: TwitterSideBarButtons[] = [
  {
    title: "Home",
    icon: <IoMdHome />,
  },
  {
    title: "Explore",
    icon: <IoIosSearch />,
  },
  {
    title: "Notification",
    icon: <IoMdNotifications />,
  },
  {
    title: "Message",
    icon: <FaRegMessage />,
  },
  {
    title: "Bookmark",
    icon: <CiBookmarkPlus />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className=" grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3  justify-start pt-8  ml-18">
          <div className=" text-4xl h-fit hover:bg-slate-800 rounded-full p-4 cursor-pointer transition-all w-fit">
            <FaTwitter />
          </div>
          <div className=" mt-4 text-2xl pr-4">
            <ul>
              {sideMenuButtons.map((item) => (
                <li
                  className=" flex justify-start items-center gap-4 hover:bg-slate-800 rounded-full px-5 py-2 w-fit mb-2 cursor-pointer"
                  key={item.title}
                >
                  <span className=" text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className=" p-3  w-full rounded-full bg-blue-400 hover:bg-blue-500 transition-all ">
              Post
            </button>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-hidden border-slate-700">
          <div className="h-full overflow-scroll no-scrollbar">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>

        <div className=" col-span-3"></div>
      </div>
    </div>
  );
}
