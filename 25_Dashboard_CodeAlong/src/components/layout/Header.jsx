import { useContext } from "react";
import { UserContext } from "../../client/context/UserContext";
import { BellIcon } from "@heroicons/react/solid";

export default function Header() {
  const { storeNumber } = useContext(UserContext);

  return (
    <header className="flex justify-between pl-14 mt-8 w-4/5 m-auto">
      <div className="flex flex-col justify-center">
        <h1>{storeNumber}</h1>
        <p className="font-thin text-s">Welcome to your Dashboard</p>
      </div>
      <div className="flex items-center">
        <BellIcon className="w-6 h-6" />
      </div>
    </header>
  );
}
