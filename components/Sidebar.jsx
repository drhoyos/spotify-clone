import React from "react";
import { AiOutlineSearch, AiFillHome, AiTwotoneHeart } from "react-icons/ai";
import { HiRss } from "react-icons/hi";
import { BiLibrary, BiLogOut } from "react-icons/bi";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-2  hover:text-white">
          <BiLogOut className="h-5 w-5" onClick={() => signOut()} />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2  hover:text-white">
          <AiFillHome className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <AiOutlineSearch className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BiLibrary className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2  hover:text-white">
          <BsFillPlusSquareFill className="h-5 w-5" />
          <p>Create Playlist </p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <AiTwotoneHeart className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HiRss className="h-5 w-5" />
          <p>Your Episodes </p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist */}
        <p className="cursor-pointer hover:text-white"> Playlist Item.. </p>
        <p className="cursor-pointer hover:text-white"> Playlist Item.. </p>
        <p className="cursor-pointer hover:text-white"> Playlist Item.. </p>
        <p className="cursor-pointer hover:text-white"> Playlist Item.. </p>
        <p className="cursor-pointer hover:text-white"> Playlist Item.. </p>
        <p className="cursor-pointer hover:text-white"> Playlist Item.. </p>
        <p className="cursor-pointer hover:text-white"> Playlist Item.. </p>
      </div>
    </div>
  );
}

export default Sidebar;
