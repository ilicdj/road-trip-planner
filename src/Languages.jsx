import { useState, useEffect } from "react";
export default function Languages() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomNumber(generateRandomNumber());
    }, 3000);
    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  function generateRandomNumber() {
    return Math.round(Math.random() * 7);
  }
  const languages = {
    serbian: "putovanje",
    english: "trip",
    german: "reisen",
    italian: "viaggio",
    dutch: "reis",
    french: "voyage",
    danish: "rejse",
    spanish: "viajar",
  };
  const languagesKeys = Object.keys(languages);
  const languagesValues = Object.values(languages);
  return (
    <div className="bg-dark p-5 w-50 text-center">
      <p className="text-light m-0">
        {languagesKeys[randomNumber]} : {languagesValues[randomNumber]}
      </p>
    </div>
  );
}
