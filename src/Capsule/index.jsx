import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import Loader from "../Components/Loader";
import Hero from "../Components/Hero";

const Capsule = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const dataRef = ref(database, `timecapsules/${id}`);
      onValue(
        dataRef,
        (snapshot) => {
          const fetchedData = snapshot.val();
          setData(fetchedData);
          setLoading(false);
        },
        {
          onlyOnce: true, // Fetch data only once
        }
      );
    };

    fetchData().catch((error) => {
      console.error("Error fetching data:", error);
      setData(null); // Handle error state
    });
  }, [id]);

  useEffect(() => {
    let intervalId;

    if (data?.timestamp) {
      intervalId = setInterval(() => {
        const remainingTime = calculateRemainingTime(data.timestamp);
        setRemainingTime(remainingTime);

        if (remainingTime <= 0) {
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId); // Clear interval on component unmount
    }
  }, [data]);

  function calculateRemainingTime(targetTimeMillis) {
    const currentTimeMillis = new Date().getTime(); // Current time in milliseconds
    const differenceMillis = targetTimeMillis - currentTimeMillis; // Difference in milliseconds
    return differenceMillis;
  }

  function msToDhms(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return (
    <>
      {loading && <Loader />}
      <Hero
        descrption={`Behold, viewer! I have brought a message from the past, carefully preserved for you. Within this capsule lies a glimpse of a moment that once was—a snapshot of thoughts, feelings, and memories waiting to be uncovered. As you open this treasure, embrace the echoes of time and reflect on how far you've come since this message was created.`}
      />

      <div className="h-full w-full justify-center items-center flex">
        {!loading && remainingTime > 0 ? (
          <div className="relative">
            <img src="/src/assets/capsule.png" height={500} width={900} />
            <div
              className="text-5xl absolute bg-gray-950 font-bold"
              style={{
                top: 140,
                left: 340,
                height: 117,
                width: 216,
                borderRadius: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset rgb(255 252 252) 0px 0px 19px ",
                color: "white",
                textShadow:
                  "0 0 4px #1122e6, 0 0 8px #e0e0e0, 0 0 12px #ccc, 0 0 16px #333",
              }}
            >
              {msToDhms(remainingTime)}
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col">
            <div className="h-full w-full flex flex-row p-24 gap-20">
              <img src={data?.image} className="p-24" alt="capsule" />
              <div className="pt-24 text-6xl w-full">
                <div className="text-8xl font-bold "> Message:</div>
                {data?.message}
              </div>
            </div>
            <div className="flex justify-center mb-12 ">
              <button
                onClick={() => {
                  window.open("/", "_self");
                }}
                className="border-2 rounded-lg text-5xl p-6"
              >
                Create your own time snap
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Capsule;
