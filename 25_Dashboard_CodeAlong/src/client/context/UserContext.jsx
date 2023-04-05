import { createContext } from "react";

export const UserContext = createContext({
  storeNumber: "001",
  location: "Hoboken, NJ",
});

export function MyUserProvider({ children }) {
  const user = {
    storeNumber: "502",
    location: "Louisville, KY",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
