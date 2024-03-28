import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TestExample from "./index.tsx";

beforeAll(()=>{
    console.log("before-all")
})

beforeEach(()=>{
    console.log("before-each")
})

test("testing input", () => {
  render(<TestExample />);
  const checkValue = screen.getByPlaceholderText("Enter Username");
  expect(checkValue).toBeInTheDocument();
  const attributeCheck = screen.getByRole("textbox");
  expect(attributeCheck).toHaveAttribute("name", "username");
});

describe("login test", () => {
  test("username test", () => {
    render(<TestExample />);
    const checkValue = screen.getByPlaceholderText("Enter Username");
    expect(checkValue).toBeInTheDocument();
  });

  test("password test", () => {
    render(<TestExample />);
    const checkValue = screen.getByPlaceholderText("Enter Password");
    expect(checkValue).toBeInTheDocument();
  });

  test("onChange event test", () => {
    render(<TestExample />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
  });

  test("onClick event test" , ()=>{
    render(<TestExample />);
    const submit = screen.getByRole("button");
    fireEvent.click(submit);
    expect(screen.getByText("successful")).toBeInTheDocument();
  })
});
