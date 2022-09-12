import React from "react";
import { render } from "@testing-library/react";

import { HelloWorldApp } from "../src/HelloWorldApp";

describe("tests on HelloWorldApp", () => {
  test("must match with the snapshot", () => {
    const title = "Hello, I'm Goku";
    const { container } = render(<HelloWorldApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("should show title on h1", () => {
    const title = "Hello, I'm Goku";
    const { container, getByText } = render(<HelloWorldApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
  });
});
