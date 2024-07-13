import Creation from "./Creation";
import Hero from "../Components/Hero";
import Tutorial from "./Tutorial";
import About from "./About";

const Landing = () => {
  return (
    <>
      <Hero
        descrption={`Hi there, I am Tempus – the wise one, the messenger, the time
            traveler, and the time snap bearer. Create a time snap, and I will
            deliver it to the future for you. Whether it's a heartfelt message,
            a cherished photo, or a special note, I'll make sure it reaches just
            the right moment.
            <br />
            Join me on this journey and make your memories timeless!`}
      />
      <Tutorial />
      <Creation />
      <About />
    </>
  );
};

export default Landing;

{
  /* <div className="w-6/12">
        <div className="flex">
          <img height={200} width={200} src="src/assets/seal.png" alt="seal" />
          <div className="flex justify-center self-center text-9xl w-full">
            Welcome to Tempus
          </div>
        </div>
        <div className="flex justify-center mt-auto">
          <div className="text-5xl">
            Hi there, I am Tempus – the wise one, the messenger, the time
            traveler, and the time snap bearer. Create a time snap, and I will
            deliver it to the future for you. Whether it's a heartfelt message,
            a cherished photo, or a special note, I'll make sure it reaches just
            the right moment.
            <br />
            Join me on this journey and make your memories timeless!
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-full w-full"
          src="src/assets/tempus.png"
          alt="tempus"
        />
      </div> */
}
