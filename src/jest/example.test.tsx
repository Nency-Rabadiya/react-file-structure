import React from "react";
import { render, screen, fireEvent , configure } from "@testing-library/react";
import TestExample from "./index.tsx";
import SnapshotExample from "./SnapshotExample.tsx";
import MultipleElement from "./MultipleElement.tsx";

configure({ testIdAttribute: "element-id" });

beforeAll(() => {
  console.log("before-all");
});

beforeEach(() => {
  console.log("before-each");
});

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

  test("onClick event test", () => {
    render(<TestExample />);
    const submit = screen.getByRole("button");
    fireEvent.click(submit);
    expect(screen.getByText("successful")).toBeInTheDocument();
  });
});

test("Snapshot example test", () => {
  const container = render(<SnapshotExample />);
  expect(container).toMatchSnapshot();
});

// Multiple element
test("Multiple element test", () => {
  render(<MultipleElement />);
  const input1 = screen.getByRole("textbox", { name: "Lastname" });
  expect(input1).toBeInTheDocument();
  const input2 = screen.getByRole("textbox", { name: "Username" });
  expect(input2).toBeInTheDocument();
  const btn1 = screen.getByRole("button", { name: "Ok" });
  expect(btn1).toBeInTheDocument();
  const btn2 = screen.getByRole("button", { name: "Reset" });
  expect(btn2).toBeInTheDocument();
  const divSelect = screen.getByRole("loginDiv");
  expect(divSelect).toBeInTheDocument();
});

test("getAllByRole test", () => {
  render(<MultipleElement />);
  const btn = screen.getAllByRole("button");
  for (let i = 0; i < btn.length; i++) {
    expect(btn[i]).toBeInTheDocument();
  }
});

test("getByLabelText test",()=>{
    render(<MultipleElement />);
    const label = screen.getByLabelText("Username");
    expect(label).toBeInTheDocument();
    expect(label).toHaveValue("ABC");
});

test("override test-id test",()=>{
  render(<MultipleElement />);
  const testId = screen.getByTestId("password");
  expect(testId).toBeInTheDocument();
});

test("getByDisplayValue",()=>{
  render(<MultipleElement />)
  const displayValue = screen.getByDisplayValue("nency");
  expect(displayValue).toBeInTheDocument();
});