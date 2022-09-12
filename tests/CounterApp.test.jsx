import React from "react";

import { render, screen } from "@testing-library/react";

import { CounterApp } from "../src/CounterApp";

describe("tests on CounterApp", () => {
  const value = 100;

  test("should match snapshot", () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("should show initial value of 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(100)).toBeTruthy();
  });
});
