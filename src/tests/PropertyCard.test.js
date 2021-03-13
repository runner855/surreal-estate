import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  it("renders the correct details", () => {
    const { getByText } = render(
      <PropertyCard title="2 bedroom flat" type="flat" />
    );
    expect(getByText("2 bedroom flat")).toBeTruthy();
    expect(getByText("2 bedroom flat")).toHaveClass("Property-Card__title");
    expect(getByText("flat")).toBeTruthy();
    expect(getByText("flat")).toHaveClass("Property-Card__type");
  });
});
