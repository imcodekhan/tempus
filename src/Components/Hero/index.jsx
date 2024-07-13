import React from "react";

export default function Hero({ descrption }) {
  return (
    <div className=" flex h-full justify-between">
      <div className="flex flex-col h-full w-6/12 ">
        <div className=" h-2/4 flex">
          <div className=" w-3/6">
            <img
              className="h-full w-full"
              src="/src/assets/seal.png"
              alt="seal"
            />
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
        <img
          className="h-full w-full"
          src="/src/assets/tempus.png"
          alt="tempus"
        />
      </div>
    </div>
  );
}
