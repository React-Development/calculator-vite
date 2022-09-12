import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { CounterApp } from "../src/CounterApp";

describe("tests on CounterApp", () => {
  const value = 10;

  test("should match snapshot", () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("should show initial value of 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test("should increment with +1 button", () => {
    render(<CounterApp value={value} />); // test subject
    fireEvent.click(screen.getByText("+1")); // stimulus
    expect(screen.getByText("11")).toBeTruthy(); // asssertion (expected behavior)
  });

  test("should decrease with -1 button", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("should work reset button", () => {
    render(<CounterApp value={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(355)).toBeTruthy();
  });
});
