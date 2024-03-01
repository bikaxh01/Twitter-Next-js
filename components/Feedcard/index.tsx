import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const FeedCard: React.FC = () => {
  return (
    <div className={inter.className}>
      <div className=" border-t border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className=" grid grid-cols-12 gap-3 ">
          <div className=" col-span-1">
            <Image
              className=" rounded-full"
              height={50}
              width={40}
              src="https://avatars.githubusercontent.com/u/127624057?v=4"
              alt="Image"
            />
          </div>
          <div className=" col-span-11">
            <h5>Bikash Mishra</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              magnam quasi, sapiente maxime praesentium deleniti mollitia, nihil
              voluptas minima tempore libero error velit culpa est nostrum
              dignissimos sed eaque ipsa.
            </p>
            <div className=" flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
              <div>
                <FiMessageCircle />
              </div>
              <div>
                <FaRetweet />
              </div>
              <div>
                <CiHeart />
              </div>
              <div>
                <CiShare2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
