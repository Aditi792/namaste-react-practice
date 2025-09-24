import { render, screen } from "@testing-library/react";
import Contact from "../component/Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case", () => {
  //not necesary to write ithe test casese insie describe block but it is good practice to do so.
  //it will help to group the test cases.
  //describe block is optional.
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load placeholder inside contact us component", () => {
    render(<Contact />);

    const NameInput = screen.getByPlaceholderText("Name");

    expect(NameInput).toBeInTheDocument();
  }); //we can write it instead of test. both are same .This is just a alias.
});
