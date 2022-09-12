import React from "react";
import { render, screen } from "@testing-library/react";

import { HelloWorldApp } from "../src/HelloWorldApp";

describe("tests on HelloWorldApp", () => {
  const title = "Hello, I'm Goku";
  const subtitle = "I'm a subtitle";

  test("should match snapshot", () => {
    const container = render(<HelloWorldApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show message \"Hello, I'm Goku", () => {
    render(<HelloWorldApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug();
  });

  test("should show title on h1", () => {
    render(<HelloWorldApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show subtitle sent by props", () => {
    render(<HelloWorldApp title={title} subtitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
