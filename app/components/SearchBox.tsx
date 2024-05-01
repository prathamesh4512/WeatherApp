// import { cn } from "@/utils/cn";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  handleCurrentLocation:Function;
  setCurrentCity:Function;
};

export default function SearchBox(props: Props) {

  

  return (
    <form
      onSubmit={props.onSubmit}
    //   className={cn(
    //     "flex relative items-center justify-center h-10",
    //     props.className
    //   )}
      className=
        "flex relative items-center justify-center h-10"
    >
    <FaSearch/>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search for places"
        className="px-4 py-2 border-none rounded-l-md focus:outline-none  focus:border-blue-500 h-full"
      />
      <MdMyLocation size={20}
      title="Your Current Location"
      onClick={()=>props.handleCurrentLocation(props.setCurrentCity)}
      className="cursor-pointer"
      />
      {/* <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full">
        <IoSearch />
      </button> */}
    </form>
  );
}