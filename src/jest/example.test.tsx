/* eslint-disable no-plusplus */
import React from "react";
import {
  render,
  screen,
  fireEvent,
  configure,
  within,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestExample from "./index.tsx";
import SnapshotExample from "./SnapshotExample.tsx";
import MultipleElement from "./MultipleElement.tsx";
import QueryBy from "./QueryBy.tsx";
import FindBy from "./FindBy.tsx";
import QueryWithinElement from "./QueryWithinElement.tsx";

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

test("getByLabelText test", () => {
  render(<MultipleElement />);
  const label = screen.getByLabelText("Username");
  expect(label).toBeInTheDocument();
  expect(label).toHaveValue("ABC");
});

test("override test-id test", () => {
  render(<MultipleElement />);
  const testId = screen.getByTestId("password");
  expect(testId).toBeInTheDocument();
});

test("getByDisplayValue", () => {
  render(<MultipleElement />);
  const displayValue = screen.getByDisplayValue("nency");
  expect(displayValue).toBeInTheDocument();
});

test("String test", () => {
  render(<MultipleElement />);
  const string1 = screen.getByText("login page", { exact: false });
  const string2 = screen.getByText("Login p", { exact: false });
  expect(string1).toBeInTheDocument();
  expect(string2).toBeInTheDocument();
});

test("Regex test", () => {
  render(<MultipleElement />);
  const string1 = screen.getByText(/login page/i);
  const string2 = screen.getByText(/Login PA/i);
  expect(string1).toBeInTheDocument();
  expect(string2).toBeInTheDocument();
});

// queryBy
test("queryBy test", () => {
  render(<QueryBy name="" />);
  // const btn = screen.getByText("Login");
  // expect(btn).not.toBeInTheDocument();   // this will fail
  const btn1 = screen.queryByText("Logout");
  expect(btn1).toBeInTheDocument();
  const btn2 = screen.queryByText("Login");
  expect(btn2).not.toBeInTheDocument();
});

// findBy
test("findBy test", async () => {
  render(<FindBy />);
  const data = await screen.findByText("Data found", {}, { timeout: 2000 });
  expect(data).toBeInTheDocument();
});

// QueryWithinElement
test("Query within element", () => {
  render(<QueryWithinElement />);
  const parent = screen.getByText("Parent");
  expect(parent).toBeInTheDocument();
  const child1 = within(parent).getByText("child1");
  expect(child1).toBeInTheDocument();
});

// userEvent
test("userEvent keyboard interaction test", async () => {
  userEvent.setup();
  render(<MultipleElement />);
  const event = screen.getByPlaceholderText("Enter name");
  await act(async () => {
    await userEvent.type(event, "abcd");
  });
  expect(screen.getByText("abcd")).toBeInTheDocument();
});

test("props test", () => {
  const name = "xyz";
  const surname = "abcd";
  render(<QueryBy name={name} surname={surname} />);
  const prop1 = screen.getByText(name);
  expect(prop1).toBeInTheDocument();
  const prop2 = screen.getByText(surname);
  expect(prop2).toBeInTheDocument();
});
