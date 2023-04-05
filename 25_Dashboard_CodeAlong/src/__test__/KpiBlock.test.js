/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import KpiBlock from "../components/base/KpiBlock";

test("displays positive color of the value when greater than the target value", async () => {
  //ARRANGE
  render(
    <KpiBlock
      svgComponent={null}
      title="conversation"
      time="today"
      value="19%"
      targetValue={4}
    />
  );

  //ACT
  let displayedValue = await screen.getByText("19%");

  //ASSERT
  expect(displayedValue.className).toContain("text-blue-900");
});

test("displays negative color of the value when greater than the target value", async () => {
  //ARRANGE
  render(
    <KpiBlock
      svgComponent={null}
      title="conversation"
      time="today"
      value="19%"
      targetValue={20}
    />
  );

  //ACT
  let displayedValue = await screen.getByText("19%");

  //ASSERT
  expect(displayedValue.className).toContain("text-fuchsia-800");
});
