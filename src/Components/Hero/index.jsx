import React from "react";
import seal from "../../assets/seal.png";
import tempus from "../../assets/tempus.png";

export default function Hero({ descrption }) {
  return (
    <div className=" flex h-full justify-between">
      <div className="flex flex-col h-full w-6/12 ">
        <div className=" h-2/4 flex">
          <div className=" w-3/6">
            <img className="h-full w-full" src={seal} alt="seal" />
          </div>
          <div className=" w-full text-9xl flex  self-center">
            Welcome to Tempus
          </div>
        </div>
        <div className=" h-full">
          <div className="text-5xl tracking-widest leading-none	 ml-24 mt-12">
            {descrption}
          </div>
        </div>
      </div>
      <div>
        <img className="h-full w-full" src={tempus} alt="tempus" />
      </div>
    </div>
  );
}
