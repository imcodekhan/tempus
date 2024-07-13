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
