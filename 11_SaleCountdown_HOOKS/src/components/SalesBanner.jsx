import { useState, useEffect } from "react";
import { TagIcon } from "@heroicons/react/outline";
import {
  isBefore,
  add,
  differenceInCalendarDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

function SaleBanner() {
  const endDate = add(new Date("January 10, 2023 00:00:00"), {
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [todaysDate, setTodaysDate] = useState(new Date());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [removeBanner, setRemoveBanner] = useState(false);
  const saleInProcess = isBefore(todaysDate, endDate);

  useEffect(() => {
    setRemoveBanner(false);

    let timer = setInterval(() => {
      console.log("Tick Tock");
      setTodaysDate(new Date());
      if (!isBefore(todaysDate, endDate)) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setRemoveBanner(true);
        return;
      } else {
        setDays(differenceInCalendarDays(endDate, todaysDate));
        setHours(differenceInHours(endDate, todaysDate) % 24);
        setMinutes(differenceInMinutes(endDate, todaysDate) % 60);
        setSeconds(differenceInSeconds(endDate, todaysDate) % 60);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <>
      <div
        className={
          !saleInProcess || removeBanner
            ? "hidden"
            : "p-4 flex flex-col justify-center bg-black text-white items-center space-x-4"
        }
      >
        <div className="flex items-center space-x-2 font-semibold text-xl">
          <TagIcon className="w-6 h-6" />
          <p>Mix &amp; Match BOGO 50% OFF</p>
        </div>
        <div className="flex items-center space-x-1 text-sm">
          <p>Sale ends in</p>
          <p className="flex items-center">
            <span className="text-2xl font-bold px-1 align-middle">{days}</span>
            Days
          </p>
          <p className="flex items-center">
            <span className="text-2xl font-bold px-1">{hours}</span>
            Hours
          </p>
          <p className="flex items-center">
            <span className="text-2xl font-bold px-1">{minutes}</span>
            Minutes
          </p>
          <p className="flex items-center">
            <span className="text-2xl font-bold px-1">{seconds}</span>
            Seconds
          </p>
        </div>
      </div>
    </>
  );
}

export default SaleBanner;
