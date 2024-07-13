import React from "react";

export default function Tutorial() {
  return (
    <div className=" h-full w-full flex pt-24">
      <div className=" w-full pl-12 ">
        <div className="text-8xl">Create time snap</div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <ul className="list-disc text-5xl leading-none p-12">
          <li>
            <div className="font-black mb-4">Capture the Moment</div> Upload a
            photo, write a heartfelt message, or jot down a special note.
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <div className="font-black mb-4">Set the Time</div> Choose a future
            date and time for when your time snap will be revealed.
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <div className="font-black mb-4">Save It</div> I&apos;ll keep your
            time snap safe and sound until the chosen moment arrives.
          </li>
        </ul>
      </div>
      <div className=" w-full pl-12 ">
        <div className="text-8xl">Share with Friends</div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <ul className="list-disc text-5xl leading-none p-12">
          <li>
            <div className="font-black mb-4">Get a Unique Link</div> Once you’ve
            created your time snap, I’ll give you a special link.
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <div className="font-black mb-4">Share the Link</div> Send this link
            to your friends, family, or anyone you want to share the moment
            with.
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <div className="font-black mb-4">Build Anticipation</div>
            Everyone with the link will see a countdown timer, eagerly awaiting
            the reveal.
          </li>
        </ul>
      </div>
      <div className=" w-full pl-12 ">
        <div className="text-8xl">View Your Time Snap</div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <ul className="list-disc text-5xl leading-none p-12">
          <li>
            <div className="font-black mb-4">Wait for the Reveal</div> When the
            set time arrives, your time snap will be unlocked.
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <div className="font-black mb-4">Enjoy the Moment</div> Open the
            link and relive the memory you captured.
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <div className="font-black mb-4">Share the Joy</div> Everyone with
            the link can now view the time snap together and cherish the moment.
          </li>
        </ul>
      </div>
    </div>
  );
}
