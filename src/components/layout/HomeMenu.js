import React from "react";
import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

const HomeMenu = () => {
  return (
    <>
      <section className="">
        <div className="absolute left-0 right-0 justify-start w-full">
          <div className="absolute left-0 overflow-x-hidden text-left -top-[70px] -z-10">
            <Image src={"/salad.png"} alt={"salad"} width={109} height={189} />
          </div>
          <div className="absolute right-0 -z-10 -top-[100px]">
            <Image src={"/salad2.png"} alt={"salad"} width={107} height={195} />
          </div>
        </div>
        <div className="mb-4 text-center">
          <SectionHeaders subHeader={"Check out"} mainHeader={"Menu"} />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </section>
    </>
  );
};

export default HomeMenu;
