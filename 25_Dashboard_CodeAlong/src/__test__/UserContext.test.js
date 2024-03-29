/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Header from "../components/layout/header";
import { UserContext } from "../client/context/UserContext";

test("displays the correct Context Value", async function () {
  //ARRANGE
  const wrapper = function ({ children }) {
    const user = {
      storeNumber: "Store 003",
      location: "Brooklyn, NY",
    };
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  };
  render(
    <StaticRouter>
      <Header />
    </StaticRouter>,
    { wrapper }
  );

  //ACT
  const welcomeUser = await screen.getByText(/^Store/).textContent;

  //ASSERT
  expect(welcomeUser).toBe("Store 003");
});
